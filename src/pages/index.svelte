<script>
import {language} from "./_i18n";
import PageLine from "./_components/ui/PageLine.svelte";
import Arrow from "./_components/icon/Arrow.svelte";
import HeadText from "./_components/typography/HeadText.svelte";
import LinkText from "./_components/typography/LinkText.svelte";
import RoundedButton from "./_components/button/RoundedButton.svelte";
import ScrollBox from "./_components/ui/ScrollBox.svelte";
import LinkHeader from "./_components/typography/LinkHeader.svelte";
import DynamicBox from "./_components/ui/DynamicBox.svelte";
import Button from "./_components/button/Button.svelte";
import ArrowUp from "./_components/icon/ArrowUp.svelte";
import Center from "./_components/ui/Center.svelte";

$: strings = $language.strings
let interv = 1

setInterval(() => {
    if (++interv === 6) {
        interv = 1
    }
}, 5000)

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

let heads = ["bab", "din", "ent", "hvv", "krx", "nkv", "pky", "rrg", "szh", "vld", "blt", "dmr", "fsl", "ikn", "lsf", "nmz", "prs", "sti", "trt", "zhi"];
heads = heads.concat(heads);
shuffle(heads);
heads = heads.concat(heads);

let y = 0;

function preventDefault(e) {
    if (e.deltaY > 0) {
        scrollDown();
        e.preventDefault();
    } else if (e.deltaY < 0) {
        scrollUp();
        e.preventDefault();
    }
}

function scrollUp() {
    let id = Math.floor(y / window.innerHeight)
    if (id <= 0) id = 1;
    document.getElementById(String(id - 1)).scrollIntoView({behavior: 'smooth', block: 'start'})
}

function scrollDown() {
    let id = Math.floor(y / window.innerHeight)
    if (id >= 3) id = 2;
    document.getElementById(String(id + 1)).scrollIntoView({behavior: 'smooth', block: 'start'})
}

if (window.innerWidth > 800) {
    window.addEventListener('wheel', preventDefault, {passive: false})
    window.addEventListener('mousewheel', preventDefault, {passive: false})
    window.addEventListener('keydown', e => {
        switch (e.key) {
            case "ArrowRight":
            case "l":
            case "д":
                let idx = communities.indexOf(selectedCommunityName) + 1;
                if (idx >= communities.length) idx = 0;
                selectedCommunity = communities[idx];
                break;
            case "ArrowLeft":
            case "h":
            case "р":
                let idx2 = communities.indexOf(selectedCommunityName) - 1;
                if (idx2 < 0) idx2 = communities.length - 1;
                selectedCommunity = communities[idx2];
                break;
            case "ArrowDown":
            case "j":
            case "a":
            case "о":
            case "ф":
                e.preventDefault()
                scrollDown();
                break;
            case "ArrowUp":
            case "k":
            case "d":
            case "а":
            case "л":
                e.preventDefault()
                scrollUp();
                break;
        }
    }, {passive: false})
}

let selectedCommunity, com_desc, com_pic, prevSelectedCommunity;
$: communities = Object.keys(strings.communities)
$: selectedCommunityName = selectedCommunity || communities[0]
$: selectedCommunityDesc = strings.communities[selectedCommunityName]
$: {
    if (selectedCommunityName !== prevSelectedCommunity || selectedCommunity === undefined || selectedCommunityDesc.pic.includes("{interv}")) {
        if (com_desc != null) com_desc.innerHTML = selectedCommunityDesc.desc
        if (com_pic != null) com_pic.innerHTML = selectedCommunityDesc.pic.replace("{interv}", interv)
        prevSelectedCommunity = selectedCommunityName
    }
}
</script>

<svelte:window bind:scrollY={y}/>


<div class="flex justify-center w-full">
    <div class="grid pt-8 m-4 flex-grow w-max max-w-screen-xl">
        <main class="max-w-7xl pt-4 sm:pt-1 sm:pb-1 lg:pt-2 lg:pb-2">
            <div class="text-left sm:max-w-2xl">
                <div class="text-6xl tracking-tight mb-8 sm:hidden italic">
                    <div>ToadsLand</div>
                </div>
                <h1 class="text-4xl tracking-tight sm:text-5xl md:text-6xl">
                    <span class="inline text-neutral-200 whitespace-normal">
                        {strings.header_that}
                        <span class="inline italic">{strings.header_w[Math.floor(Math.random() * 3)]}</span>
                        {strings.header1}
                    </span>
                    <span class="inline text-lime-400">{strings.header2}</span>
                </h1>
            </div>
        </main>
        <div class="relative">
            <div class="sm:absolute sm:left-0 sm:w-4/12 sm:top-32 my-4">
                <span>
                    {strings.subheader}
                </span>
            </div>
            <div class="hidden sm:flex flex-row justify-center m-24 self-end text-neutral-50">
                <Arrow/>
            </div>
        </div>
    </div>
</div>
<div class="sm:absolute top-0 right-0 h-screen flex flex-col justify-center h-72 sm:w-4/12 sm:h-4/6 overflow-hidden sm:overflow-visible w-full">
    <div class="border-neutral-800 flex flex-row sm:block sm:border-2 sm:border-r-0 p-12 sm:w-full w-max infi-scroll sm:overflow-hidden">
        {#each heads as head}
            <RoundedButton>
                <img src={"/t_head/" + head + ".png.webp"} alt={head} width="128">
            </RoundedButton>
        {/each}
    </div>
    <div class="my-2">
        {#each ["discord", "tiktok", "youtube", "vk", "donate"] as item}
            <div class="mx-2 inline-block">
                <a href={"/" + item} class="hover:text-lime-600">
                    <LinkText>
                        {strings[item].toLowerCase()}.
                    </LinkText>
                </a>
            </div>
        {/each}
    </div>
</div>
<div class="h-24 sm:h-0"></div>
<div id="1"></div>
<PageLine>
    <HeadText>
        {strings.par_who} <span class="italic">{strings.par_are}</span> {strings.par_you_in}
        <span class="text-lime-400">{strings.par_new_world}</span>?
    </HeadText>
    <ScrollBox>
        {#each communities as community}
            <Center>
                <RoundedButton selected={community === selectedCommunityName} onclick={() => selectedCommunity = community}>
                    <img src={strings.communities[community].icon} alt={community} class="rounded-full">
                </RoundedButton>
                {#if community === selectedCommunityName}
                    <ArrowUp/>
                {/if}
            </Center>
        {/each}
    </ScrollBox>
    <DynamicBox center>
        <div class="flex-1 m-4">
            <LinkHeader>
                {selectedCommunityName}.
            </LinkHeader>
            <div class="text-neutral-500">
                {strings.com_admin} {selectedCommunityDesc.admin}
            </div>
            <br>
            <div bind:this={com_desc}>

            </div>
            <a href="/discord">
                <Button>
                    {strings.sign}
                </Button>
            </a>
        </div>
        <div class="flex-1 m-4 border-2 border-neutral-800 h-full" bind:this={com_pic}>
        </div>
    </DynamicBox>
</PageLine>
<div id="2"></div>
<PageLine>
    <HeadText>
        {strings.par_who} <span class="italic">{strings.par_are}</span> {strings.par_we_in}
        <span class="text-lime-400">{strings.par_new_world}</span>?
    </HeadText>
    <DynamicBox>
        <div class="m-4 border-2 border-neutral-800 flex-1">
            <img src="/cnt/community.webp" alt="" class="w-full h-full">
        </div>
        <div class="flex-1 m-4">
            <LinkHeader>
                {strings.com_title}
            </LinkHeader>
            <br>
            {strings.com_desc}
            <br>
            <a class="self-end" href="/discord">
                <Button>
                    {strings.sign}
                </Button>
            </a>
        </div>
    </DynamicBox>
    <DynamicBox>
        <div class="flex-1 m-4">
            <LinkHeader>
                {strings.events_title}
            </LinkHeader>
            <br>
            {strings.events_desc}
            <br>
            <a href="/discord">
                <Button>
                    {strings.sign}
                </Button>
            </a>
        </div>
        <div class="m-4 border-2 border-neutral-800 flex-1">
            <iframe class="w-full h-full" src="https://www.youtube.com/embed/bX8MtDRuOxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </DynamicBox>
</PageLine>
<div id="3"></div>
<div class="max-w-screen-lg text-center sm:my-36">
    <HeadText>
        {strings.par_who} <span class="italic">{strings.par_are}</span> {strings.par_you_in}
        <span class="text-lime-400">{strings.par_new_world}</span>?
    </HeadText>
    <div>
        {strings.clickbait_text}
    </div>
    {#each ["discord", "tiktok", "youtube", "vk", "donate"] as item}
        <div class="mx-2 inline-block">
            <a href={"/" + item} class="hover:text-lime-600">
                <Button>
                    {strings[item]}
                </Button>
            </a>
        </div>
    {/each}
</div>
<style>
    .infi-scroll {
        animation: infi-scroll 75s normal infinite;
    }

    @media (min-width: 640px) {
        .infi-scroll {
            animation: infi-scroll-2 75s normal infinite;
        }
    }

    @keyframes infi-scroll-2 {
        0% {
            margin-top: 0;
        }
        50% {
            margin-top: -1250px;
        }
        100% {
            margin-top: 0;
        }
    }

    @keyframes infi-scroll {
        0% {
            margin-left: 0;
        }
        50% {
            margin-left: -2500px;
        }
        100% {
            margin-left: 0;
        }
    }
</style>