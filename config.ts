export default () => ({
  serviceOne: {
    port: process.env.PORT_ONE,
    tcp: {
      host: process.env.TCP_HOST_ONE,
      port: process.env.TCP_PORT_ONE,
    },
  },
  serviceTwo: {
    port: process.env.PORT_TWO,
    tcp: {
      host: process.env.TCP_HOST_TWO,
      port: process.env.TCP_PORT_TWO,
    },
  },
});
