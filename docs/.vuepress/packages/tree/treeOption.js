export default {
    name: 'treeOption',
    functional: true,
    props: {
        render: Function,
        node:Object
    },
    render: (h, ctx) => {
        const params = {
            row: ctx.props.node,
        };
        return ctx.props.render(h, params);
    }
};