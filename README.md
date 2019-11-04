# HMRC timline

## Nunjucks

```
{% set exampleContent %}
<p>Everyone loves port-salut taleggio. Lancashire hard cheese the big cheese taleggio cheddar cheese slices fromage bavarian bergkase. Red leicester macaroni cheese port-salut cheese strings bocconcini cow halloumi smelly cheese. Dolcelatte edam danish fontina the big cheese blue castello cheeseburger.</p>
{% endset %}
{{ hmrcTimeline({
  events: [
    {
      title: 'Something else happened',
      time: '22nd April 2019',
      machineTime: '2019-04-22',
      content: exampleContent
    },
    {
      title: 'Something happened',
      time: '18th April 2019',
      machineTime: '2019-04-18',
      content: exampleContent
    }
  ]
}) }}
```