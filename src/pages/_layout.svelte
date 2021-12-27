<script>
    import {isActive, goto} from "@roxi/routify";
    import LinkText from "./_components/typography/LinkText.svelte";
    import {language} from "./_i18n";
    import LinkHeader from "./_components/typography/LinkHeader.svelte";
    import AppDecorator from "./_components/ui/AppDecorator.svelte";
    import RoundedButton from "./_components/button/RoundedButton.svelte";

    $: strings = $language.strings

    function goHome() {
        if ($isActive('./index')) {
            document.body.scrollIntoView({behavior: 'smooth', block: 'start'})
        } else {
            $goto('./index', {})
        }
    }

    function onload() {
        ["/ym.js"].forEach(src => {
            const script = document.createElement('script');
            script.setAttribute("src", src)
            document.head.append(script)
        })
    }

    const navItems = ["index", "services", "about"]
</script>

<div id="0"></div>
<div class="min-h-screen bg-neutral-900 text-neutral-50">
    <nav id="header" class="bg-neutral-900 z-50 w-full flex items-center flex-col h-32 sm:h-48 mb-12 cursor-pointer"
         on:click={goHome}>
        <div class="flex flex-row justify-start items-center flex-grow w-full max-w-screen-xl sm:py-4 md:py-8 transition duration-100">
            <RoundedButton>
                <img src={"/icon.webp"} alt="Logo" width="64">
            </RoundedButton>
            <div class="hidden sm:block text-5xl sm:text-6xl tracking-tighter italic text-neutral-50 hover:text-lime-400">
                ToadsLand
            </div>
        </div>
        <div class="absolute left-0 border-neutral-800 border-2 border-l-0 border-t-0 h-32 sm:h-48 w-11/12 sm:w-6/12"></div>
    </nav>
    <slot decorator={AppDecorator}/>
    <div use:onload></div>
    <div class="flex items-center flex-col w-full mt-12 bg-neutral-900 border-2 border-neutral-800">
        <div class="flex flex-col md:flex-row md:items-end w-full max-w-screen-lg p-8 text-neutral-500 transition duration-250 cursor-pointer">
            <div class="flex-1">
                <br>
                <div class="text-neutral-50 text-5xl tracking-tighter cursor-pointer"
                     on:click={goHome}>
                    ToadsLand
                </div>
                <br>
                <LinkText>
                    {strings.community}
                </LinkText>
                <LinkText>
                    {strings.project_from} <a class="text-neutral-600 hover:text-purple-600"
                                              href="https://ely.su/r/toads" target="_blank">Elytrium</a>
                </LinkText>
                <br>
                <br>
            </div>
            <div class="flex-1">
                <LinkHeader>
                    {strings.social}
                </LinkHeader>
                <br>
                <LinkText>
                    <a class="hover:text-blue-600" href="/vk"
                       target="_blank">VK</a>
                </LinkText>
                <LinkText>
                    <a class="hover:text-indigo-600" href="/discord"
                       target="_blank">Discord</a>
                </LinkText>
                <LinkText>
                    <a class="hover:text-rose-600" href="/youtube"
                       target="_blank">YouTube</a>
                </LinkText>
                <LinkText>
                    <a class="hover:text-pink-600" href="/tiktok"
                       target="_blank">TikTok</a>
                </LinkText>
                <br>
            </div>
            <div class="flex-1">
                <LinkHeader>
                    {strings.admin}
                </LinkHeader>
                <br>
                <LinkText>
                    <a class="hover:text-lime-600" href="https://t.me/P0koyy"
                       target="_blank">P0koy</a>
                </LinkText>
                <LinkText>
                    <a class="hover:text-sky-600" href="https://hevav.dev/"
                       target="_blank">hevav</a>
                </LinkText>
                <LinkText>
                    <a class="hover:text-amber-600" href="https://solo.to/sub2i1"
                       target="_blank">Sub2I1</a>
                </LinkText>
                <LinkText>
                    <a class="hover:text-purple-600" href="https://vk.com/zhizhoid"
                       target="_blank">Zhizhoid</a>
                </LinkText>
                <br>
            </div>
        </div>
    </div>
</div>