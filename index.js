const { bech32 } = require('bech32');
const base58 = require('bs58')

function decodeAddress(address) {
    if (address.startsWith('1') || address.startsWith('3')) {
        const hexed = base58.decode(address);
        return Buffer.from(hexed).toString('hex').slice(2, 42);
    }
    if (address.startsWith('bc1')) {
        const hexed = bech32.decode(address);
        return bech32.fromWords(hexed.words.slice(1)).map(num => num.toString(16).padStart(2, 0)).join('')
    }
}

const addresses = [
    '159QgP4Ewvadjc4HDpaaR6pir2R4ZfzVfQ',
    '3FupZp77ySr7jwoLYEJ9mwzJpvoNBXsBnE',
    'bc1qx9t2l3pyny2spqpqlye8svce70nppwtaxwdrp4',
    'bc1q9d4ywgfnd8h43da5tpcxcn6ajv590cg6d3tg6axemvljvt2k76zs50tv4q',
];


const decoded = addresses.map(decodeAddress);

console.log(decoded)