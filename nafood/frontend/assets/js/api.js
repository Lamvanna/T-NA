// Simple API wrapper (placeholder)
const API_BASE = '/api';
async function apiGet(path){ return fetch(API_BASE + path).then(r=>r.json()) }
async function apiPost(path, body){ return fetch(API_BASE + path, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}).then(r=>r.json()) }
