# TZ_nd
Документация UI-Kit для проекта TZ_nd.

## Breakpoints
В проекте доступно 5 миксинов для медиа-запросов:

```
{
  "sm": {
    "width": "360px"
  },
  "md": {
    "width": "768px"
  },
  "lg": {
    "width": "1366px"
  },
  "xl": {
    "width": "1200px"
  },
  "xxl": {
    "width": "1920px"
  }
}
```

Применение медиа-запросов:

<table class="table" style="width: 100%">
  <thead>
  <tr>
    <th>Mixin</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
  
<tr>
<td><code>@include sm;</code></td>
<td><code>@media (min-width: 360px) { ... }</code></td>
</tr>

<tr>
<td><code>@include md;</code></td>
<td><code>@media (min-width: 768px) { ... }</code></td>
</tr>

<tr>
<td><code>@include lg;</code></td>
<td><code>@media (min-width: 1366px) { ... }</code></td>
</tr>

<tr>
<td><code>@include xl;</code></td>
<td><code>@media (min-width: 1200px) { ... }</code></td>
</tr>

<tr>
<td><code>@include xxl;</code></td>
<td><code>@media (min-width: 1920px) { ... }</code></td>
</tr>

  </tbody>
</table>

## Grid
```
@include grid(parameters);
```

Parameters:

* `$columns-sm` - количество колонок на медиа-запросе `sm`.
* `$columns-md` - количество колонок на медиа-запросе `md`.
* `$columns-lg` - количество колонок на медиа-запросе `lg`.
* `$columns-xl` - количество колонок на медиа-запросе `xl`.
* `$columns-xxl` - количество колонок на медиа-запросе `xxl`.

## Themes
Всего тем в проекте: 1.

### Default

CSS переменные темы `theme-default`:

```
--colors-dark: #0A1F38;
--colors-dark-middle: #1B2F46;
--colors-dark-light: #2F4056;
--colors-gray: #9DA5AF;
--colors-green-dark: #819400;
--colors-green-middle: #97AB0D;
--colors-green: #A5BB0C;
--colors-green-light: #B1C909;
--colors-white: #ffffff;

```

## Utilities
Набор утилитарных CSS переменных.

### Fonts
Объект `fonts` содержит следующие миксины:

#### Fonts Family
```
@include fonts-family;
```

CSS переменные миксина `fonts-family`:

```
--fonts-family-montserrat: Montserrat, system-ui-sans-serif;

```
#### Fonts Size
```
@include fonts-size;
```

CSS переменные миксина `fonts-size`:

```
--fonts-size-h1: 60px;
  md: 104px;
--fonts-size-h2: 32px;
  md: 48px;
--fonts-size-h3: 24px;
  md: 32px;
--fonts-size-h4: 20px;
  md: 24px;
--fonts-size-text: 18px;
  md: 20px;
--fonts-size-texts: 14px;
  md: 18px;
--fonts-size-textsb: 14px;
  md: 18px;

```
#### Fonts Weight
```
@include fonts-weight;
```

CSS переменные миксина `fonts-weight`:

```
--fonts-weight-h1: 900;
--fonts-weight-h2: 600;
--fonts-weight-h3: 400;
--fonts-weight-h4: 600;
--fonts-weight-text: 500;
--fonts-weight-texts: 400;
--fonts-weight-textsb: 700;

```
#### Fonts Height
```
@include fonts-height;
```

CSS переменные миксина `fonts-height`:

```
--fonts-height-h1: 64px;
  md: 104px;
--fonts-height-h2: 36px;
  md: 72px;
--fonts-height-h3: 36px;
  md: 48px;
--fonts-height-h4: 26px;
  md: 32px;
--fonts-height-text: 24px;
  md: 32px;
--fonts-height-texts: 24px;
  md: 28px;
--fonts-height-textsb: 24px;
  md: 28px;

```
### Indents
Объект `indents` содержит следующие миксины:

#### Indents
```
@include indents;
```

CSS переменные миксина `indents`:

```
--indents-200: 5px;

```
### Transition
Объект `transition` содержит следующие миксины:

#### Transition Time
```
@include transition-time;
```

CSS переменные миксина `transition-time`:

```
--transition-time-10: 0.1s;

```
#### Transition Easing
```
@include transition-easing;
```

CSS переменные миксина `transition-easing`:

```
--transition-easing-linear: linear;

```
### Radius
Объект `radius` содержит следующие миксины:

#### Radius
```
@include radius;
```

CSS переменные миксина `radius`:

```
--radius-5: 5px;
--radius-12: 12px;
--radius-32: 32px;
--radius-36: 36px;
--radius-124: 124px;
--radius-50percent: 50%;
--radius-rounded: 99em;

```
### Shadow
Объект `shadow` содержит следующие миксины:

#### Shadow
```
@include shadow;
```

CSS переменные миксина `shadow`:

```
--shadow-default: 30px 10px 30px 0px rgba(0, 0, 0, 0.25);

```
### Blur
Объект `blur` содержит следующие миксины:

#### Blur
```
@include blur;
```

CSS переменные миксина `blur`:

```
--blur-0: blur(0px);

```
