
import React from 'react';
import { artworks } from '@/data/artworks';

export default function AuditPage() {
    const report: string[] = [];
    const log = (msg: string) => report.push(msg);

    // 1. Count Check
    if (artworks.length === 250) {
        log("PASS: GALLERY_DATA has exactly 250 items.");
    } else {
        log(`FAIL: GALLERY_DATA has ${artworks.length} items. Expected 250.`);
    }

    // 2. Duplicate ID Check
    const idSet = new Set<string>();
    const duplicates: string[] = [];
    artworks.forEach(item => {
        const id = String(item.id);
        if (idSet.has(id)) {
            duplicates.push(id);
        }
        idSet.add(id);
    });

    if (duplicates.length === 0) {
        log("PASS: No duplicate IDs found.");
    } else {
        log(`FAIL: Duplicate IDs found: ${duplicates.join(', ')}`);
    }

    // 3. Image Array Check
    const missingImages: string[] = [];
    artworks.forEach(item => {
        if (!item.images || item.images.length === 0) {
            missingImages.push(String(item.id));
        }
    });

    if (missingImages.length === 0) {
        log("PASS: All items have populated image arrays.");
    } else {
        log(`FAIL: Items with missing/empty image arrays: ${missingImages.join(', ')}`);
    }

    // 4. Unit Existence Check
    const existingIds = new Set(artworks.map(d => parseInt(d.id, 10)));
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

    return (
        <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
            <h1>System Audit Report</h1>
            <ul>
                {report.map((line, i) => (
                    <li key={i} style={{ color: line.startsWith('FAIL') ? 'red' : 'green' }}>
                        {line}
                    </li>
                ))}
            </ul>
        </div>
    );
}
