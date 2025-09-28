# WORKFLOWS

## 1) CI Pipeline (`.github/workflows/ci.yml`)
**Purpose:** Ensure code quality (lint/format), correctness (tests with ≥80% coverage), and build artifacts.  
**Triggers:** Push to `main`/`develop`, PRs into `main`.  
**Jobs:** `lint` → `test` → `build`.  
**Secrets:** `CODECOV_TOKEN` (only if repo is private).  
**Troubleshooting:**  
- Coverage <80% → add more Jest tests.  
- Build fails → run `npm run build` locally.  
- Codecov upload fails → ensure `coverage/lcov.info` exists.

---

## 2) Dependency Audit (`.github/workflows/audit.yml`)
**Purpose:** Run daily `npm audit` and open a GitHub Issue if high/critical vulnerabilities are found.  
**Trigger:** Scheduled daily at 00:00 UTC.  
**Secrets:** None.  
**Troubleshooting:**  
- If Issues keep opening, update or pin dependencies.  
- Run `npm audit` locally for details.

---

## 3) Pages Deploy (`.github/workflows/pages.yml`)
**Purpose:** Deploy the site to GitHub Pages from the `dist/` folder after each push to `main`.  
**Trigger:** Push to `main`.  
**Secrets:** None.  
**Setup:** In GitHub repo → Settings → Pages → Source = GitHub Actions.  
**Troubleshooting:**  
- Ensure `npm run build` outputs `dist/`.  
- Check Actions logs if publish fails.

---

## 4) Custom Composite Action (`.github/actions/setup-project/action.yml`)
**Purpose:** DRY reusable step for Node.js setup + dependency install.  
**Usage Example:**  
```yaml
- uses: ./.github/actions/setup-project
