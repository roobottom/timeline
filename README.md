# HMRC timline

## HTML

```
<ol class="timeline">
  <li class="timeline-event">
    <h2 class="timeline-event-title">Something else happened</h2>
    <span class="timeline-event-meta">22 April 2019</span>
    <div class="timeline-event-content">
      <p>Everyone loves port-salut taleggio. Lancashire hard cheese the big cheese taleggio cheddar cheese slices fromage bavarian bergkase. Red leicester macaroni cheese port-salut cheese strings bocconcini cow halloumi smelly cheese. Dolcelatte edam danish fontina the big cheese blue castello cheeseburger.</p>
    </div>
  </li>
  <li class="timeline-event">
    <h2 class="timeline-event-title">Something happened</h2>
    <span class="timeline-event-meta">18 April 2019</span>
    <div class="timeline-event-content">
      <p>Everyone loves port-salut taleggio. Lancashire hard cheese the big cheese taleggio cheddar cheese slices fromage bavarian bergkase. Red leicester macaroni cheese port-salut cheese strings bocconcini cow halloumi smelly cheese. Dolcelatte edam danish fontina the big cheese blue castello cheeseburger.</p>
    </div>
  </li>
</ol>
```

## Nunjucks

```
{% set exampleContent %}
<p>Everyone loves port-salut taleggio. Lancashire hard cheese the big cheese taleggio cheddar cheese slices fromage bavarian bergkase. Red leicester macaroni cheese port-salut cheese strings bocconcini cow halloumi smelly cheese. Dolcelatte edam danish fontina the big cheese blue castello cheeseburger.</p>
{% endset %}
{{ hmrcTimeline({
  events: [
    {
      title: 'Something else happened',
      time: '22 April 2019',
      content: exampleContent
    },
    {
      title: 'Something happened',
      time: '18 April 2019',
      content: exampleContent
    }
  ]
}) }}
```
