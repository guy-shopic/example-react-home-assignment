const METHODS = {
  GET: "GET",
  POST: "POST",
};

function httpRequest({ url, method = METHODS.GET, body }) {
  return fetch(url, {
    method,
    body,
  }).then((res) => res.json());
}

export const GET = (url) =>
  httpRequest({
    url,
    method: METHODS.GET,
  });

export const POST = (url, body) =>
  httpRequest({ url, body, method: METHODS.POST });
