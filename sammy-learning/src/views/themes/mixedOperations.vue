<template>
	<div class="column is-10">
		<div class="md-layout">
			<h1>Operaciones Combinadas</h1>
		</div>
		<div class="md-layout">
			<VueFaqAccordion :items="myItems" />
		</div>
		<div class="md-layout">
			<div class="md-layout-item column is-1">
				<img src="../../assets/figures/parentheses-open-sign.png" style="height: 75px;" />
			</div>
			<div class="md-layout-item column is-1">
				<md-field>
					<md-input v-model="numbers[0]" type="number" min="0"></md-input>
				</md-field>
			</div>
			<div class="md-layout-item column is-1">
				<img :src="'/assets/minus.svg'" style="width: 60px;" />
			</div>
			<div class="md-layout-item column is-1">
				<md-field>
					<md-input v-model="numbers[1]" type="number" min="0"></md-input>
				</md-field>
			</div>
			<div class="md-layout-item column is-1">
				<img src="../../assets/figures/parentheses-close-sign.png" style="height: 75px;" />
			</div>
			<div class="md-layout-item column is-1">
				<img :src="'/assets/multiplication.svg'" style="width: 60px;" />
			</div>
			<div class="md-layout-item column is-1">
				<md-field>
					<md-input v-model="numbers[2]" type="number" min="0"></md-input>
				</md-field>
			</div>
			<div class="md-layout-item column is-1">
				<img :src="'/assets/equal.svg'" style="width: 60px;" />
			</div>
		</div>
		<div v-if="numbers[2]==0">
			<div class="md-layout">
				<div class="md-layout-item column is-12">
					<FigureComponent v-bind:number="0" />
				</div>
			</div>
		</div>
		<div v-if="numbers[2]">
			<div v-if="numbers[1]>numbers[0]">
				<FigureComponent v-bind:number="-1" />
			</div>
			<div v-if="numbers[1]==numbers[0]">
				<FigureComponent v-bind:number="0" />
			</div>
			<div v-if="numbers[1]<numbers[0]">
				<div v-for="(number,index) in numbers[2]" :key="index" class="md-layout">
					<div class="md-layout-item column is-12">
						<FigureComponent v-bind:number="numbers[0]-numbers[1]" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import FigureComponent from '../../components/figure-component.vue';
	import VueFaqAccordion from 'vue-faq-accordion';
	export default {
		name: 'MixedOperations',
		components: { FigureComponent, VueFaqAccordion },
		data() {
			return {
				numbers: [10, 3, 4,],
				myItems: [
					{
						title: 'Titulo 2',
						value: '<div>aaa</div>',
						category: 'Ejemplo 2'
					},
					{
						title: 'Titulo 3',
						value: 'CC',
						category: 'Ejemplo 2'
					}
				]
			}
		},
		watch: {
			numbers: {
				immediate: false,
				deep: true,
				handler(newValue, oldValue) {
					for (let index = 0; index < this.numbers.length; index++) {
						if (this.numbers[index] == '') {
							this.numbers[index] = 0;
						}
						else {
							this.numbers[index] = parseInt(this.numbers[index]);
						}
					}
				},
			}
		}
	}
</script>