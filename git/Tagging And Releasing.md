---
tag: git
---
[[Learn Git & GitHub]]

---
```git
# Show All Tags
git tag

# Add New Lightweight Tag
git tag "Version Name Or Tag Name Here"

# Add New Annotated Tag
git tag -a "Version Name Or Tag Name Here" -m "Description Or Message"

# Push Tag To Remote
git push origin "Tag Name Here"

# List All Tags Starting With v1.
git tag -l "v1.*"

# Delete Tag
git tag -d "Version Name Or Tag Name Here"

# Delete Tag From Remote
git push origin --delete "Version Name Or Tag Name Here"
```