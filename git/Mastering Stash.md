---
tag: git
---
[[Learn Git & GitHub]]

---

```git
# Create Text File With "Hello World" String Inside It
echo "Hello World" > about_readme.txt

# Save Work To Stash
git stash

# List Items in Stash
git stash list

# Get Work From Stash
git stash pop

# Save Work To Stash
git stash

# List Items in Stash
git stash list

# Get Work From Stash
git stash pop

# Save Work To Stash With Description
git stash save "Description Here"

# Get Specific Stash
git stash pop stash@{2}

# Delete Stash
git stash drop stash@{1}

# Show Lastest Added Stash Content
git stash show

# Show Specific Stash Content
git stash show stash@{1}

# Empty The Stash
git stash clear
```