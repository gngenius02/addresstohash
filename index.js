const { bech32 } = require('bech32');
const base58 = require('bs58');

function int2Hex(num) {
    return num.toString(16).padStart(2, 0);
}


function decodeBase58Address(address) {
    const hexed = base58.decode(address);
    return Buffer.from(hexed).toString('hex').slice(2, 42);
}

function decodeBech32Address(address) {
    const hexed = bech32.decode(address).words.slice(1);
    return bech32.fromWords(hexed).map(int2Hex).join('');
}

function decodeAddress(address) {
    if (address.startsWith('1') || address.startsWith('3')) {
        return decodeBase58Address(address);
    }
    if (address.startsWith('bc1')) {
        return decodeBech32Address(address);
    }
}

// const addresses = [
//     '159QgP4Ewvadjc4HDpaaR6pir2R4ZfzVfQ',
//     '3FupZp77ySr7jwoLYEJ9mwzJpvoNBXsBnE',
//     'bc1qx9t2l3pyny2spqpqlye8svce70nppwtaxwdrp4',
//     'bc1q9d4ywgfnd8h43da5tpcxcn6ajv590cg6d3tg6axemvljvt2k76zs50tv4q',
// ];
// const decoded = addresses.map(decodeAddress);
// console.log(decoded)



