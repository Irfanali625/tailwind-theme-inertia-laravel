import * as feather from 'feather-icons';

const FeatherDirective = {
    mounted(el) {
        feather.replace();
    },
};

export default FeatherDirective;
