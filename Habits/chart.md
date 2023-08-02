```tracker
searchType: Frontmatter
searchTarget: weight 
folder: journal
datasetName: weight 
fixedScale: 1
line:
	title: Weight
	yAxisLabel: weight, count
	yAxisUnit: kg
	lineColor: lightgreen 
	pointColor: " yellow "
```
----
---

```tracker
searchType: frontmatter
searchTarget: weight
folder: journal
summary:
    template: "Minimum: {{min()}}kg\nMaximum: {{max()}}kg\nMedian: {{median()}}kg\nAverage: {{average()}}kg"
```

---
------
```tracker
searchType: Frontmatter
searchTarget: screen_time_(min) 
folder: journal
datasetName: screen_time 
fixedScale: 1
line:
	title: screen_time 
	yAxisLabel: time
	yAxisUnit: min
	lineColor: lightgreen 
	pointColor: " yellow "
```

----
---

```tracker
searchType: frontmatter
searchTarget: screen_time_(min)
folder: journal
summary:
    template: "Minimum: {{min()}}min\nMaximum: {{max()}}min\nMedian: {{median()}}min\nAverage: {{average()}}min"
```

---
---
[[habit tracker]]