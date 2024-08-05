const fs = require('fs');
const { readData, storeData, appendData } = require('../utils/fileUtils'); // Adjust the path as needed

jest.mock('fs');

describe('fileUtils', () => {
    const filepath = 'test.json';
    const sampleData = [{ id: 1, value: 'data' }];

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('readData should create a file if it does not exist', () => {
        fs.existsSync.mockReturnValue(false);
        fs.readFileSync.mockReturnValue(JSON.stringify([]));

        const data = readData(filepath);

        expect(fs.existsSync).toHaveBeenCalledWith(filepath);
        expect(fs.writeFileSync).toHaveBeenCalledWith(filepath, JSON.stringify([], null, 2), 'utf-8');
        expect(fs.readFileSync).toHaveBeenCalledWith(filepath, 'utf8');
        expect(data).toEqual([]);
    });

    test('readData should return parsed data', () => {
        fs.existsSync.mockReturnValue(true);
        fs.readFileSync.mockReturnValue(JSON.stringify(sampleData));

        const data = readData(filepath);

        expect(fs.readFileSync).toHaveBeenCalledWith(filepath, 'utf8');
        expect(data).toEqual(sampleData);
    });

    test('storeData should write data to a file', () => {
        storeData(filepath, sampleData);

        expect(fs.writeFileSync).toHaveBeenCalledWith(filepath, JSON.stringify(sampleData, null, 2), 'utf-8');
    });

    test('appendData should append data to a file', () => {
        fs.existsSync.mockReturnValue(true);
        fs.readFileSync.mockReturnValue(JSON.stringify(sampleData));

        const newData = { id: 2, value: 'new data' };

        appendData(filepath, newData);

        expect(fs.readFileSync).toHaveBeenCalledWith(filepath, 'utf8');
        expect(fs.writeFileSync).toHaveBeenCalledWith(filepath, JSON.stringify([...sampleData, newData], null, 2), 'utf-8');
    })

    test('appendData should create a file if it does not exist', () => {
        fs.existsSync.mockReturnValue(false);

        const newData = { id: 2, value: 'new data' };

        appendData(filepath, newData);

        expect(fs.writeFileSync).toHaveBeenCalledWith(filepath, JSON.stringify([newData], null, 2), 'utf-8');
    })
});