# Cash Flow Tracker — with statement import

An installable web app (PWA). People import their last 3–6 months of bank
statements, the app auto-detects recurring bills and income, lets them review
and correct everything (date, account, amount, frequency), then builds a
per-account cash-flow forecast. Everything runs in the browser — no data leaves
the device.

## Files
- `index.html` — the app
- `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png` — makes it installable

## Host on GitHub Pages
1. Create a repo and upload ALL these files.
2. Settings > Pages > Source: Deploy from a branch > main / root. Save.
3. Open the `https://YOURNAME.github.io/REPO/` link on your phone.
4. Share > Add to Home Screen (iPhone) or menu > Add to home screen (Android).

## How it works for a user
1. **Import screen:** drag in statement files.
   - **CSV is strongly preferred** — every major bank lets you export CSV from
     online banking (look for "Download" / "Export" on the transactions page).
     CSV parses reliably.
   - **PDF is best-effort.** Text-based PDFs may partly work; scanned/image PDFs
     usually won't. If PDF gives poor results, use CSV.
2. The app names the account from the file (e.g. a file with "RBC" in the name
   becomes the RBC account). This can be changed per row.
3. **Analyze** finds items that repeat across months with a stable amount —
   i.e. real bills and income. Variable spending (groceries, dining, one-off
   purchases) is intentionally left out.
4. **Review screen:** every detected item is editable — rename, change in/out,
   amount, which account it belongs to, how often it repeats, and the next date.
   Untick anything you don't want. Add a new account from the account dropdown.
5. **Populate tracker:** builds the per-account view — current balance (you type
   it in), "after next payment", "lowest point ahead", and a running forecast you
   check off as payments happen.

## Notes / limits
- **Detection isn't perfect** — that's why every item is editable before it's
  used. Semi-monthly vs biweekly especially may need a quick dropdown fix.
- **Data is per-device.** Balances and edits are saved in that browser only; they
  do not sync between phone and computer.
- **Offline:** the tracker works offline once loaded. The *import* step needs a
  connection the first time (it loads CSV/PDF reader libraries from a CDN).
- **Privacy:** files are parsed entirely in the browser. Nothing is uploaded.
  A GitHub Pages URL is public, though — anyone with the link can open the app
  (they can't see your saved data, which lives only on your device). Use a
  hard-to-guess repo name if that matters to you.
