import Root from './components/index'
import link from "@frontity/html2react/processors/link";
import image from "@frontity/html2react/processors/image";
import iframe from '@frontity/html2react/processors/iframe';


export default {
  name: "macave-package",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      searchPostValue: '',
    }
  },
  actions: {
    theme: {
      setSearchPostValue: ({state}) => value => {
        state.theme.searchPostValue = value;
      },
      linkToPost: ({ actions }) => value => {
        actions.router.set( value );
      }
    }
  },
  libraries: {
    html2react: {
      processors: [link,image,iframe]
    }
  }
};

