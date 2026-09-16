FROM node:20-alpine

WORKDIR /app

# zkopíruje úplně všechno z projektu do containeru
COPY . .

# nainstaluje závislosti
RUN npm install

# build-time proměnné (NEXT_PUBLIC_ se zapékají do kódu při buildu)
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL
ENV NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=$NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

# zbuildí produkční verzi Next.js appky
RUN npm run build

EXPOSE 3000

# spustí produkční server
CMD ["npm", "start"]