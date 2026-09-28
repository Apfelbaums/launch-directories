# Backlink badges ("Featured on ...")

A chunk of free-tier directories condition their free listing on a
backlink: they only publish (or only make the link dofollow) once your own
site displays their badge — an `<a>` wrapping an `<img>` pointing back at
your listing. Understanding why, and how to verify one before you claim
it's live, matters more than any single site's exact markup.

## Why sites do this

The badge is the payment. A directory with no ad revenue funds itself with
inbound links: your badge is a backlink to them, and their listing page is
a backlink to you. The free tier isn't actually free — it's a link swap,
and the directory enforces it by checking your site for the badge before
it flips the listing to published or dofollow.

## Where the badge goes

The site footer, in a "Featured on" (or similar) block, is the conventional
place — visible, permanent, and clearly optional to a human visitor. A few
sites are picky about placement ("above the fold", "on this specific page")
or require the badge to persist indefinitely as the condition for the link
staying dofollow; read the exact requirement on the site's own submission
or dashboard page, since it varies more than the badge markup itself does.

## Before you click their "verify" button

Directories check for the badge by crawling your site, not by trusting your
word. Confirm the badge HTML is actually live and reachable **before**
triggering their verification:

```
curl -s https://your-domain.example/ | grep -i 'directory-domain.example'
```

If that returns nothing, the badge isn't deployed yet (cache, a pending
release, wrong branch) and pressing "verify" will just fail or, worse,
silently record a false negative that delays the listing further. Confirm
the badge is present in the actual served HTML, not just in a source file
that hasn't shipped.

## The link only stays dofollow while the badge stays up

Most of these deals are conditional, not one-time: pull the badge later and
the directory is entitled to demote your listing back to nofollow or
unpublish it. Treat "add a badge" as an ongoing commitment, not a one-off
task — if the badge ever gets removed in a redesign, that's a reason to
re-check the directory relationship, not just clean up a stray footer link.

## Recording it

Note the badge requirement, its exact markup, and its verification step in
that site's `sites/<domain>.md` file (see `references/run-one-site.md` for
the note template) so a later run doesn't have to rediscover it.
