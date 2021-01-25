module.exports = {
  client: {
    includes: ["./src/**/*.tsx"],
    tagName: "gql",
    service: {
      name: "nest-backend",
      url: "https://nestpodcats.herokuapp.com/graphql",
    },
  },
};
