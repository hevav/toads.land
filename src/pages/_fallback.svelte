<script>
  import Button from "./_components/button/Button.svelte";
  import {language} from "./_i18n";
  import Link from "./_components/typography/Link.svelte";

  $: strings = $language.strings
</script>

<div class="text-9xl text-lime-50">
  404
</div>
<div class="text-3xl tracking-widest text-lime-50">
  {strings.not_found}
</div>
<Link to="/">
  <Button>
    {strings.index}
  </Button>
</Link>
