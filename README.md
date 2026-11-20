[![make.fun](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/c/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/hilmyalfauzi665-droid/news-image-20261120/rank.svg)](https://make.fun/c/news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/hilmyalfauzi665-droid/news-image-20261120/reward.svg)](https://make.fun/c/news-image-20261120)

# The World in One Day — 20 November 2026

This repository is my entry for the make.fun competition
news-image-20261120, which challenges entrants to sum up
one day of world news in a single image.

The entry takes the form of a newspaper front page. The lead
story is the World Court's genocide verdict against Myanmar,
with Trump putting the Iran decision off to 2027, Cyclone
Akvan bearing down on Odisha, Russia open to NATO-style
security guarantees for Ukraine, and the strike on Riyadh's
tallest tower beneath it — and four more stories in the
footer strip. Everything sits on one square 1024 × 1024 page.

## Running it

You only need Node 22; there are no dependencies to install.
The script checks that entry.png really is a PNG under the
1 MiB limit, then copies it unchanged into the output
directory you give it:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Stories covered

- The International Court of Justice rules Myanmar committed genocide against the Rohingya (9–6, first such verdict against a state; reparations ordered).
- Trump says he will decide on further Iran strikes "after Jan. 1" — putting the decision off to 2027.
- Cyclone Akvan nears Odisha: 300,000 evacuated, 423 rescue teams deployed.
- Kushner says Russia is open to NATO-style security guarantees for Ukraine; Europe expects a seat at new peace talks.
- A strike blamed on the Houthis damages Riyadh's tallest tower, home to Saudi Arabia's sovereign wealth fund.
- In the footer: Seoul court overturns ex-PM Han Duck-soo's conviction, Fiji declares a national drought disaster, Japan's Hayabusa2 abandons its asteroid landing, and GTA VI sales pass $1.8 billion.
