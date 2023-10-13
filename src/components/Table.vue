<template>
    <div class="container">
        <div class="wrap-table">
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã</th>
                        <th>Tên đơn vị</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(value, index) in data" :key="index">
                        <td>{{index + 1}}</td>
                        <td>{{value.code}}</td>
                        <td>
                            <base-input
                                spellcheck="false"
                                style='border: none; outline: none; background: none'
                                :style="focused == value.code? ',border: none;outline: none; box-shadow:inset 0 0 0 2px #C2E0CF;' : ''"
                                :modelValue="value.name"
                                v-model="value.name"
                                @focus="focused = value.code"
                                @blur="focused = ''"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import BaseInput from './BaseInput.vue'
    import data from '../DB/test.json'

    export default {    
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Table",
        components: { BaseInput },
        data() {
            return {
                focused : false,
                data,
                stt: 0
            }
        }
    }
</script>


<style scoped>
.container {
    width: 100%;
    min-height: 100vh;
    background-color: #f2f3f5;
    display: flex;
    align-items: center;
    justify-content: center;
}

.wrap-table {
    padding: 90px 75px;
    background-color: #fff;
    width: 100%;
    max-width: 750px;
    border-radius: 30px;
}

.wrap-table table {
    width: 100%;
    border: 1px solid #333;
}

.wrap-table table thead {
    height: 30px;
    align-items: center;
    text-align: center;
    line-height: 30px;
}

.wrap-table table thead tr{
    font-weight: 600;
}

.wrap-table table thead tr th, 
.wrap-table table tbody tr td{
    border: 1px solid #eee;
}

.wrap-table table thead tr th:first-child {
    width: 50px;
}
.wrap-table table thead tr th:nth-child(2) {
    width: 50px;
}

.wrap-table table tbody tr td input {
    background: none;
}

.wrap-table table tbody tr:hover td{ 
    background: #e5f2fe;
}

.wrap-table table tbody tr td {
    text-align: center;
}



</style>