import 'phaser';
import Toastify from 'toastify-js';

import Cookie from '../lib/Cookie';
import { $, request, ErrType, is_error, game_has_player } from '../lib/util';

import OverlayedScene from './overlayed';

export default class RoomScene extends OverlayedScene
{
    /** 'Back' button. */
    protected b_back: HTMLButtonElement;
    /** 'Start' button. */
    protected b_start: HTMLButtonElement;
    /** Checkbox for state: ready/not ready. */
    protected inp_ready: HTMLInputElement;
    /** For copying room id. */
    protected inp_room_id: HTMLInputElement;
    /** List of players. */
    protected t_room: HTMLTableSectionElement;

    protected me: string;
    protected ready: boolean;
    protected room_id: string;
    protected socket: SocketIOClient.Socket;

    public constructor ()
    {
        super({ key: 'room' }, 'assets/overlay/room.html');
    }

    public init (
        args: {
            room_id: string,
            socket: SocketIOClient.Socket
        }
    ) {
        this.ready = false;
        this.room_id = args.room_id;
        if (!this.socket) {
            this.socket = args.socket;
            this.setup_socket();
        }
    }

    public create ()
    {
        super.create();
        this.validate()
            .then(() => this.show_members())
            .then(() => this.ready = true);
    }

    public is_ready ()
    {
        return this.ready && this.scene.isActive();
    }

    protected display_socket (
        id: string,
        ready?: boolean,
        is_me?: boolean,
        first?: boolean
    ) {
        if ($(`socket-${id}`)) {
            return;
        }
        let row = this.t_room.insertRow();
        row.id = `socket-${id}`;
        row.innerHTML = `
            <td>${id}</td>
            <td id="ready-${id}">${ready_sign(ready)}</td>
            <td>${is_me_sign(is_me)}</td>
            <td id="first-${id}">${first_sign(first)}</td>
        `;
    }

    protected setup_overlay_fields ()
    {
        this.b_back = <HTMLButtonElement> $('b-back');
        this.b_start = <HTMLButtonElement> $('b-start');
        this.inp_ready = <HTMLInputElement> $('inp-ready');
        this.inp_room_id = <HTMLInputElement> $('inp-room-id');
        this.t_room = <HTMLTableSectionElement> $('t-room');
    }

    protected setup_overlay_behavior ()
    {
        this.b_back.onclick = () => {
            this.socket.emit('client:room#leave');
            this.scene.start('join', { socket: this.socket });
        };

        this.b_start.onclick = () => {
            this.socket.emit('client:room#start');
        };

        this.inp_ready.onclick = () => {
            this.socket.emit('client:room#ready', this.inp_ready.checked);
        };

        this.inp_room_id.value = this.room_id;

        this.inp_room_id.addEventListener('click', () => {
            this.inp_room_id.select();
            document.execCommand('copy');
            this.inp_room_id.setSelectionRange(0, 0);
            Toastify({
                text: 'Copied to clipboard!',
                duration: 1000,
                position: 'center',
                gravity: 'bottom',
                selector: 'popups'
            }).showToast();
        });
    }

    protected setup_socket ()
    {
        this.socket
            .on('server:room#join', (id: string) => {
                if (this.is_ready()) {
                    this.display_socket(id, false, this.me == id);
                }
            })
            .on('server:room#ready', (id: string, ready: boolean) => {
                if (this.is_ready()) {
                    $(`ready-${id}`).innerHTML = ready_sign(ready);
                }
            })
            .on('server:room#first', (id: string) => {
                if (this.is_ready()) {
                    $(`first-${id}`).innerHTML = first_sign(true);
                }
            })
            .on('server:room#enable', (enabled: boolean) => {
                if (this.is_ready()) {
                    this.b_start.disabled = !enabled;
                }
            })
            .on('server:room#leave', (id: string) => {
                if (this.is_ready()) {
                    this.t_room.removeChild($(`socket-${id}`));
                }
            })
            .on('server:game#start', async () => {
                if (this.is_ready()) {
                    Cookie.set('id', this.socket.id);
                    Cookie.set('room', this.room_id);
                    let res = await game_has_player(this.room_id, this.socket.id);
                    if (res.response) {
                        this.scene.start('game', { socket: this.socket });
                    }
                }
            });
    }

    protected async validate ()
    {
        let join_result = await new Promise((resolve, reject) => {
            this.socket.emit('client:room#join', this.room_id, resolve);
            setTimeout(reject, 10000);
        }) as ErrType | { me: string };

        if (is_error(join_result)) {
            throw this.scene.start('join', { error: join_result.error, socket: this.socket });
        } else {
            this.me = join_result.me;
        }
    }

    protected async show_members ()
    {
        let members: PlayerState[] = await request(`/.room.get_players/id=${this.room_id}`, 'json');
        for (let { id, ready } of members) {
            this.display_socket(id, ready, id == this.me, id == members[0].id);
        }
    }
}

const ready_sign = (ready: boolean) =>
    ready ? '✔️' : '❌';

const is_me_sign = (is_me: boolean) =>
    is_me ? '⬅️' : '';

const first_sign = (first: boolean) =>
    first ? '🥇' : '';
