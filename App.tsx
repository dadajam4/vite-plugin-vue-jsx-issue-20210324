import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  name: 'App',
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <RouterView></RouterView>
      </div>
    );
  },
});
