<script>
    export let description, active, title, id, cost, tariff;
    import Item from "../ui/Item.svelte";
</script>

<Item>
    <div class="m-2 text-md font-bold">
        <div class="flex flex-row justify-between">
            <div>
                {description.join(" • ")}
            </div>
            <div>
                &bull; {active ? "услуга активна" : "услуга неактивна"}
            </div>
        </div>
    </div>
    <div class="m-2 text-2xl font-bold">
        {title}
    </div>
    <div class="m-2 text-md font-bold">
        {tariff} &bull; {cost} &bull; #{id}
    </div>
</Item>