<template src='./heroes.html'></template>

<script>
  export default {
    name: 'Heroes',
    data() {
      return {
        selectedHero: undefined,
        showMore : false,
        heroes: [
          {
            id: 10,
            firstName: 'Ella',
            lastName: 'Papa',
            description: 'fashionista',
          },
          {
            id: 20,
            firstName: 'Madelyn',
            lastName: 'Papa',
            description: 'the cat whisperer',
          },
          {
            id: 30,
            firstName: 'Haley',
            lastName: 'Papa',
            description: 'pen wielder',
          },
          {
            id: 40,
            firstName: 'Landon',
            lastName: 'Papa',
            description: 'arc trooper',
          },
        ],
      };
    },
  };
</script>