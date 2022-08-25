export function Tnotify(props, context) {
  context.$q.notify({
    progress: true,
    message: props.message,
    type: props.type,
    timeout: props.timeout ? props.timeout : 5000,
    position: props.position ? props.position : "top-right",
    actions: [
      {
        icon: "close",
        color: "white",
        handler: () => {
          /* ... */
        },
      },
    ],
  });
}
