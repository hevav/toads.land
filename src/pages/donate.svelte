<script>
    import Button from "./_components/button/Button.svelte";
    import {language} from "./_i18n";
    import HeadText from "./_components/typography/HeadText.svelte";
    import Input from "./_components/typography/Input.svelte";


    $: strings = $language.strings

    let amount = 50
    let nickname = ""
    $: comment = strings.comments_don[0]

    const s = (q) => {
        let ln = q % 10;
        if(ln === 1 && !q.includes("11")) return 0;
        else if(ln >= 2 && ln <= 4 && !q.includes("1"+ln)) return 1;
        return 2;
    }
</script>

<div class="max-w-screen-lg">
    <HeadText>
        {strings.we} - <span class="italic">{strings.modern_com}</span>
        {strings.which_par} <span class="italic">{strings.lives}</span>
    </HeadText>
    <div class="sm:w-8/12 text-lg">
        {strings.and_that_don}
    </div>
    <div class="m-4">
        <Input placeholder={strings.nick_ds} bind:value={nickname}/>
        <Input placeholder={strings.sum} rightholder={strings.rubles[s(amount)]} bind:value={amount}/>
        <select name="" id="" class="block m-2 bg-neutral-900 border-neutral-800 border-2 px-4 py-2" on:change={e => comment = e.target.value}>
            {#each strings.comments_don as comment_val}
                <option>{comment_val}</option>
            {/each}
        </select>
        <a href={"https://oplata.qiwi.com/create?publicKey=48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPuFWw5kjSXYwPEewUrtMNsFv15772boggqmJFfcLJ5x76uGJgvAqnvq3XdESSGGZQD8JMBE7wop5avyhHaa8d4E8ZLYTnYMxj5hbFpvYYn&amount=" + amount + "&successUrl=https%3A%2F%2Ftoads.land%2Fdonate&account=" + encodeURIComponent(nickname) + "&comment=" + encodeURIComponent(comment) +"&customFields[themeCode]=Petr-YSpyiLt9c6"}>
            <Button>
                {strings.donate_btn}
                {amount}
                {strings.rubles[s(amount)]}
                {comment}.
            </Button>
        </a>
        <a href="/">
            <Button>
                {strings.misclick}
            </Button>
        </a>
    </div>
</div>