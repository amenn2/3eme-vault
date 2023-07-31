---

database-plugin: basic

---

```yaml:dbfolder
name: Habit Tracker
description: tracking habits
columns:
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    position: 1
    isHidden: false
    sortIndex: 1
    isSorted: true
    isSortedDesc: false
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      content_alignment: text-align-center
      wrap_content: true
  read:
    input: checkbox
    accessorKey: read
    key: read
    id: read
    label: read
    position: 2
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  nosu:
    input: checkbox
    accessorKey: nosu
    key: nosu
    id: nosu
    label: nosu
    position: 3
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  screen_time_(min):
    input: number
    accessorKey: screen_time_(min)
    key: screen_time_(min)
    id: screen_time_(min)
    label: screen time (min)
    position: 6
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Calisthenics:
    input: checkbox
    accessorKey: Calisthenics
    key: Calisthenics
    id: Calisthenics
    label: Calisthenics
    position: 5
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  overall_Day:
    input: select
    accessorKey: overall_Day
    key: overall_Day
    id: overall_Day
    label: overall Day
    position: 7
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 131
    options:
      - { label: "⭐", value: "⭐", color: "hsl(93, 95%, 90%)"}
      - { label: "⭐⭐", value: "⭐⭐", color: "hsl(107, 95%, 90%)"}
      - { label: "⭐⭐⭐", value: "⭐⭐⭐", color: "hsl(4, 95%, 90%)"}
      - { label: "⭐⭐⭐⭐", value: "⭐⭐⭐⭐", color: "hsl(180, 95%, 90%)"}
      - { label: "⭐⭐⭐⭐⭐", value: "⭐⭐⭐⭐⭐", color: "hsl(102, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: false
      option_source: manual
  weight:
    input: number
    accessorKey: weight
    key: weight
    id: weight
    label: weight
    position: 4
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
config:
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: true
  group_folder_column: 
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: false
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  show_metadata_tags: false
  source_data: tag
  source_form_result: "#habit"
  source_destination_path: /
  row_templates_folder: /
  current_row_template: 
  pagination_size: 10
  font_size: 16
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: last_field
  date_format: dd-mmmm
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: false
  implementation: default
filters:
  enabled: false
  conditions:
```