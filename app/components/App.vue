<template>
    <Page>
        <ActionBar title="Home" />
        <ScrollView>
            <StackLayout class="home-panel">
                <!--Add your page content here-->
                <Label textWrap="true" text="Play with NativeScript!" />
                <Button text="Button" @tap="onButtonTap" />
                <Button text="second" @tap="goToSecond"
                    class="h2 description-label" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>
<script>
    import Second from "./Next";
    export default {
        components: {
            Second
        },
        methods: {
            onButtonTap() {
                console.log("Button was pressed");
            },

            goToSecond() {
                console.log("Button was pressed");
                this.$navigateTo(Second);
            }
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>