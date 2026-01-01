
import { artworks as GALLERY_DATA } from '../src/data/artworks';

// Mock console for report
const report: string[] = [];
function log(msg: string) {
    console.log(msg);
    report.push(msg);
}

function runAudit() {
    log("Starting Final System Audit...");

    // 1. Count Check
    if (GALLERY_DATA.length === 250) {
        log("PASS: GALLERY_DATA has exactly 250 items.");
    } else {
        log(`FAIL: GALLERY_DATA has ${GALLERY_DATA.length} items. Expected 250.`);
    }

    // 2. Duplicate ID Check
    const idSet = new Set<string>();
    const duplicates: string[] = [];

    GALLERY_DATA.forEach(item => {
        // IDs are strings in the data
        if (idSet.has(item.id)) {
            duplicates.push(item.id);
        }
        idSet.add(item.id);
    });

    if (duplicates.length === 0) {
        log("PASS: No duplicate IDs found.");
    } else {
        log(`FAIL: Duplicate IDs found: ${duplicates.join(', ')}`);
    }

    // 3. Image Array Check
    const missingImages: string[] = [];
    GALLERY_DATA.forEach(item => {
        if (!item.images || item.images.length === 0) {
            missingImages.push(item.id);
        }
    });

    if (missingImages.length === 0) {
        log("PASS: All items have populated image arrays.");
    } else {
        log(`FAIL: Items with missing/empty image arrays: ${missingImages.join(', ')}`);
    }

    // 4. Unit Existence Check
    // Check that IDs 1 through 250 exist
    const existingIds = new Set(GALLERY_DATA.map(d => parseInt(d.id, 10)));
    const missingIds: number[] = [];
    for (let i = 1; i <= 250; i++) {
        if (!existingIds.has(i)) {
            missingIds.push(i);
        }
    }

    if (missingIds.length === 0) {
        log("PASS: All IDs from 1 to 250 are present.");
    } else {
        log(`FAIL: Missing IDs: ${missingIds.join(', ')}`);
    }

    log("Audit Complete.");
}

runAudit();
