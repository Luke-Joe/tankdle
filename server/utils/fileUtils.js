import fs from 'fs';

export function readData(filepath) {
    try {
        if (!fs.existsSync(filepath)) {
            fs.writeFileSync(filepath, JSON.stringify([], null, 2), 'utf-8');
        }
        const data = fs.readFileSync(filepath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error fetching data from ${filepath}:`, error);
        return null;
    }
}

export function storeData(filepath, data) {
    try {
        fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        console.error(`Error storing data to ${filepath}:`, error);
    }
}

export function appendData(filepath, data) {
    try {
        let existingData = [];
        if (fs.existsSync(filepath)) {
            existingData = readData(filepath) || [];
        }

        existingData.push(data);
        fs.writeFileSync(filepath, JSON.stringify(existingData, null, 2), 'utf-8');
    } catch (error) {
        console.error(`Error appending data to ${filepath}:`, error);
    }
}
