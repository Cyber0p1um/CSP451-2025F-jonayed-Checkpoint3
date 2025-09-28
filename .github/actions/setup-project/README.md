# Setup Project (Composite Action)

Reusable composite action that sets up Node.js, installs dependencies, runs linting, and tests with coverage.

## Inputs
- `node-version` (default `18`): Node.js version to use.

## Example
```yaml
- uses: ./.github/actions/setup-project
  with:
    node-version: 18
```
