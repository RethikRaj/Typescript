// Optional parameters/fields

// Example 1 :
function connectToServerWithOptional(
  host: String,
  port?: number,
  secure?: boolean,
): String {
  // Always provide default value for optional parameters
  port = port ?? 3000;
  secure = secure ?? false;

  return `Connected ${host} ${port} ${secure}`;
}

connectToServerWithOptional("localhost", 8080, true);
connectToServerWithOptional("localhost");
connectToServerWithOptional("localhost", 8080);
connectToServerWithOptional("localhost", undefined, true);

// Default Parameters/fields
// Example 2 :
function connectToServerWithDefault(
  host: String,
  port: number = 3000,
  secure: boolean = false,
): String {
  return `Connected ${host} ${port} ${secure}`;
}

connectToServerWithDefault("localhost", 8080, true);
connectToServerWithDefault("localhost");
connectToServerWithDefault("localhost", 8080);
connectToServerWithDefault("localhost", undefined, true);
