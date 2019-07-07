import io from 'socket.io-client';

import * as Cookie from './js/cookie';

/**
 * @type {SocketIOClient.Socket}
 */
var socket;

async function main() {
    socket = io();

    let join_result = await new Promise((resolve, reject) => {
        socket.emit(
            'client:game#join',
            Cookie.get('room'), Cookie.get('id'),
            resolve
        );
        setTimeout(reject, 3000);
    });
}

main();
