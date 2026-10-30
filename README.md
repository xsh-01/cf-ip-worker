# Your IP Address - Cloudflare Worker

A fast Cloudflare Worker that displays your IP address, geolocation, and connection infos via well-designed APIs. Perfect for checking your IP, debugging network issues, or integrating IP detection into your scripts.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/xsh-01/cf-ip-worker)

## ✨ Features

- 🌐 **IP Detection** - Get your IPv4 or IPv6 address instantly
- 📍 **Geolocation** - City, region, country, continent, and coordinates
- 🌍 **Timezone** - Automatic timezone detection
- 🔒 **Connection Info** - TLS version, HTTP protocol, and cipher details
- ⚡ **Fast** - Edge computing with Cloudflare's global network

## 🚀 Deploy Your Own

### Manual Deployment

1. Clone this repository:

   ```bash
   git clone https://github.com/xsh-01/cf-ip-worker.git
   cd worker-your-ip
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Deploy to Cloudflare:

   ```bash
   npm run deploy
   ```


## 💻 Usage Examples

### Get Your IP

```bash
curl https://your-worker.workers.dev/ip
```

### Get IPv4 Only

```bash
curl https://your-worker.workers.dev/ipv4
```

### Get IPv6 Only

```bash
curl https://your-worker.workers.dev/ipv6
```

### Get All Information as JSON

```bash
curl https://your-worker.workers.dev/json
```

### Use in Scripts

```bash
# Store IP in a variable
MY_IP=$(curl -s https://your-worker.workers.dev/ip)
echo "My IP is: $MY_IP"

# Check if you have IPv6
if curl -s https://your-worker.workers.dev/ipv6 > /dev/null 2>&1; then
  echo "IPv6 is available"
else
  echo "IPv6 is not available"
fi
```

## 🛠️ Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Run tests:

   ```bash
   npm test
   ```


## 📊 Available Data

This worker leverages Cloudflare's edge network to provide:

### From `request.cf` (IncomingRequestCfProperties)

- `asn` - ASN number
- `asOrganization` - Organization name
- `colo` - Data center IATA code
- `country` - Country code (ISO 3166-1)
- `isEUCountry` - Whether in EU
- `city` - City name
- `continent` - Continent code
- `latitude` - Latitude
- `longitude` - Longitude
- `postalCode` - Postal code
- `region` - Region name
- `regionCode` - Region code (ISO 3166-2)
- `timezone` - Timezone
- `httpProtocol` - HTTP protocol version
- `tlsVersion` - TLS version
- `tlsCipher` - TLS cipher

### From HTTP Headers

- `CF-Connecting-IP` - Client IP address
- `X-Forwarded-For` - Original visitor IP

## 🧪 Testing

Tests are written with Vitest and the Cloudflare Workers testing utilities:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 📄 License

> Understanding this license:
>
> - You can deploy and use this project as-is, since the webpage includes a link to this GitHub project.
> - If you modify this project, you ***MUST*** make your modified source code available to users under the same license.
> - If you use this project as a dependent API service accessed from another project of yours, you may keep your project's license since we use GPLv3 (not AGPLv3).
