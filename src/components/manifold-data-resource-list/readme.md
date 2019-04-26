# 🔒 Resource List

Creates an unstyled, unordered list with `<a>` tags.

```html
<manifold-data-resource-list />
```

## Events

Navigating client-side happens via the `manifold-resourceList-click` custom event.

| Name                          | Details                    | Data                         |
| :---------------------------- | :------------------------- | :--------------------------- |
| `manifold-resourceList-click` | User has clicked on a link | `resourceId`, `resourceName` |

## Link format

To navigate using a traditional `<a>` tag, specify a `link-format` attribute, using
`:resource` as a placeholder:

```html
<manifold-data-resource-list link-format="/resource/:resourceLabel" />
```

Note that this will disable the custom events unless `preserve-event` is
passed as well.

## Loading State

This data component supports an optional loading state by specifying a child
slot:

```html
<manifold-data-resource-list>Loading…</manifold-data-product-name>
```

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                    | Type                  | Default            |
| --------------- | ---------------- | -------------------------------------------------------------- | --------------------- | ------------------ |
| `connection`    | --               | _(hidden)_ Passed by `<manifold-connection>`                   | `Connection`          | `connections.prod` |
| `linkFormat`    | `link-format`    | Link format structure, with `:resource` placeholder            | `string \| undefined` | `undefined`        |
| `preserveEvent` | `preserve-event` | Should the JS event still fire, even if link-format is passed? | `boolean`             | `false`            |
| `tick`          | `tick`           | Specify any new string here to trigger a refresh               | `string`              | `undefined`        |


## Events

| Event                         | Description | Type                |
| ----------------------------- | ----------- | ------------------- |
| `manifold-resourceList-click` |             | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*