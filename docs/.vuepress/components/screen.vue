<template>
  <div>
    <ne-screen v-model="select" @change="handelchange">
      <ne-screen-option
        label="年级"
        @handelclick="nodeclick"
        :data="data2"
        value="value"
        keys="id"
        multiple
      ></ne-screen-option>
      <ne-screen-option label="专业" @handelclick="nodeclick" :data="data" value="text" keys="ids"></ne-screen-option>
    </ne-screen>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select: [{ ids: 1, text: "2311" }, { id: 1, value: "23zc1" }],
      data: [
        {
          ids: "1",
          text: "2311"
        },
        {
          ids: "2",
          text: "23as1"
        },
        {
          ids: "3",
          text: "23zcz1"
        }
      ],
      data2: [
        {
          id: "1",
          value: "23zc1"
        },
        {
          id: "2",
          value: "23q1"
        },
        {
          id: "3",
          value: "23xz1"
        }
      ]
    };
  },
  methods: {
    nodeclick(item) {},
    handelchange() {
    //  console.log(this.select);
    }
  }
};
</script>


