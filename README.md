# Turn Draft

A lightweight, offline-first fantasy football draft co-pilot built for the 1.01 in a 12-team snake draft.

## Run it

Open `index.html` directly, or serve the folder locally:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## What it does

- Calculates every pick from league size and draft slot.
- Tracks rival picks and your roster with undo/reset controls.
- Recommends available players using ADP, the exact 1 QB / 2 RB / 2 WR / 1 TE / 1 Flex / 1 K / 1 D/ST lineup, scoring, and the room's QB pressure.
- Includes an optional rookie-upside boost beginning in Round 9, after core starter needs are prioritized.
- Includes a Bengals-fan room switch that adds urgency to Joe Burrow at the 2.12/3.01 turn and flags Cincinnati players with a homer-tax warning.
- Supports an editable bench size (seven by default) and a late QB2 without treating the backup as another starter.
- Evaluates players as values, fair picks, or reaches against the current overall pick.
- Saves draft progress in local browser storage.

The bundled player board uses 2026 1QB redraft ADP captured August 23, 2026, with late-round depth from ESPN's August 19 PPR sheet and current K/DST consensus. Rankings are deliberately treated as product data rather than predictions; news and league-specific scoring should always move the board.
