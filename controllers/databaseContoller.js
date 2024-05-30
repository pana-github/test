const MDB = require('node-adodb');
// const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\Users\E363175\Documents;');
const mdb = new MDB('C:\Users\E363175\Documents');

async function getDataFromDatabase() {
    try{
        await mdb.connect();
        const rows = await mdb.query('SELECT * FROM 未納履歴ヘッダ_D;');
        return rows;
    }
    catch(error) {
        console.error(error);
        return { error: 'An error occurred while fetching data' };
    }
}

module.exports = { getDataFromDatabase };