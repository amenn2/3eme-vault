---
banner: "https://images.unsplash.com/photo-1456428746267-a1756408f782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
banner_y: 0
---
# Subjects
```dataview
LIST 
FROM #subject 
SORT file.name ASC
```

---

# Taki live
```dataview
TABLE without id  subject , lesson , teacher ,
file.link as Date
from "taki"
limit 10
sort file.date desc
```

---

# Courses
## javascript
```dataview
TABLE week
from #javascript 
```
---








---

