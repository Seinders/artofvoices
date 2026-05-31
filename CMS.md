# Admin / Content Management (Decap CMS)

The site has a built-in admin page at **`/admin/`** (e.g. `https://your-site.netlify.app/admin/`)
where you can manage speaker photos, voice samples, names and bios without touching
code. Edits are saved straight to the GitHub repo, which makes Netlify rebuild and
publish automatically (~1 minute).

It's powered by [Decap CMS](https://decapcms.org/) — free, open-source, no database,
no server. The admin UI is just a static page on your own site.

---

## One-time setup (do this once, after the site is deployed)

The admin needs permission to log in with GitHub. This is two short steps. You only
ever do this once.

### Step 1 — Register a GitHub OAuth app

1. Go to <https://github.com/settings/developers> → **OAuth Apps** → **New OAuth App**
2. Fill in:
   - **Application name:** `Art of Voices CMS`
   - **Homepage URL:** your live site URL (e.g. `https://artofvoices.netlify.app`)
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
     *(this exact URL — Netlify hosts the login handshake for you)*
3. Click **Register application**
4. Copy the **Client ID**
5. Click **Generate a new client secret** and copy the **secret** (you only see it once)

### Step 2 — Add the app to Netlify

1. In Netlify: **Site configuration → Access & security → OAuth**
   *(may appear as "Authentication providers")*
2. Under **Authentication providers**, click **Install provider**
3. Choose **GitHub**, paste the **Client ID** and **Client Secret** from Step 1
4. Save

That's it. No functions, no extra services.

---

## Using the admin

1. Go to `https://your-site/admin/`
2. Click **Login with GitHub** → authorize once
3. Open **Roster → Sprecher / Sprecherinnen**
4. Click a person to edit. You can:
   - Upload a new **Foto** (portrait, 3:4 — without one, a stylish initial shows instead)
   - Upload a **Sprachprobe** (MP3 — appears as the inline player on the card)
   - Edit **Name**, **Bekannt für**, **Biografie**
   - Drag rows to reorder the roster (the "01 / 28" numbering follows this order)
5. Click **Publish** (top bar). Your change commits to the repo and goes live in ~1 minute.

### Who can log in
Anyone with **write access to the `Seinders/artofvoices` repo**. To let someone else
(e.g. Stefan) edit, add them as a collaborator: GitHub → repo → **Settings → Collaborators
→ Add people**. They'll need a free GitHub account.

---

## Good to know / limitations

- **Don't rename a person to a brand-new name casually.** The page URL
  (`/sprecher/marie-bierstedt/`) and the Synchronkartei link are derived from the
  name. Renaming changes the URL and drops the Synchronkartei link. Fixing names is
  fine — just tell a developer if a rename needs the link/URL updated too.
- **One voice sample per person.** The model holds a single MP3 per speaker (matches
  the current data). If you ever need multiple, that's a small code change.
- **Branch:** the CMS commits to the branch in `public/admin/config.yml` (`branch:`).
  It's currently `claude/peaceful-ride` to match what Netlify deploys. If the
  production branch is ever renamed (e.g. to `main`), update that line or edits
  won't appear live.
- **Images aren't auto-compressed.** Try to upload reasonably sized photos
  (under ~1 MB, long edge ~1000px). A developer can batch-optimize if needed.

---

## How it's wired (for a developer)

- `public/admin/index.html` — loads Decap CMS from the CDN
- `public/admin/config.yml` — backend (GitHub), collections, fields
- Speaker data lives in `src/data/speakers.json`, shaped as `{ "speakers": [...] }`
  (Decap file collections need an object root, not a bare array)
- `src/data/speakers.ts` reads `speakersJson.speakers`, derives `slug` (from name)
  and `synchronkarteiUrl` (from a name→URL map) — these two are **not** CMS-editable
- Photos upload to `public/photos/`, audio to `public/audio/` (per-field
  `media_folder` overrides in the config)
