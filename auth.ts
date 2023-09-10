import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next'
import type { NextAuthOptions as NextAuthConfig } from 'next-auth'
import { getServerSession } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import nodemailer from 'nodemailer'
import GoogleProvider from 'next-auth/providers/google'
import { PouchDBAdapter } from '@auth/pouchdb-adapter'

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation
declare module 'next-auth/jwt' {
  interface JWT {
    /** The user's role. */
    userRole?: 'admin'
  }
}

export const config = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    EmailProvider({
      server: nodemailer.createTransport({
        jsonTransport: true,
      }),
    }),
  ],
  adapter: PouchDBAdapter({}), // fake it because we don't even get this far
  callbacks: {
    async jwt({ token }) {
      token.userRole = 'admin'
      return token
    },
  },
} satisfies NextAuthConfig

// Helper function to get session without passing config every time
// https://next-auth.js.org/configuration/nextjs#getserversession
export function auth(...args: [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, config)
}

// We recommend doing your own environment variable validation
declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NEXTAUTH_SECRET: string

      AUTH_APPLE_ID: string
      AUTH_APPLE_SECRET: string
      AUTH_ATLASSIAN_ID: string
      AUTH_ATLASSIAN_SECRET: string
      AUTH_AUTH0_ID: string
      AUTH_AUTH0_ISSUER: string
      AUTH_AUTH0_SECRET: string
      AUTH_AUTHENTIK_ID: string
      AUTH_AUTHENTIK_SECRET: string
      AUTH_AZUREAD_ID: string
      AUTH_AZUREAD_SECRET: string
      AUTH_AZUREB2C_ID: string
      AUTH_AZUREB2C_SECRET: string
      AUTH_BN_ID: string
      AUTH_BN_ISSUER: any
      AUTH_BN_SECRET: string
      AUTH_BOX_ID: string
      AUTH_BOX_SECRET: string
      AUTH_BOXYHQ_ID: string
      AUTH_BOXYHQ_ISSUER: string
      AUTH_BOXYHQ_SECRET: string
      AUTH_BUNGIE_ID: string
      AUTH_BUNGIE_SECRET: string
      AUTH_COGNITO_ID: string
      AUTH_COGNITO_SECRET: string
      AUTH_COINBASE_ID: string
      AUTH_COINBASE_SECRET: string
      AUTH_DISCORD_ID: string
      AUTH_DISCORD_SECRET: string
      AUTH_DROPBOX_ID: string
      AUTH_DROPBOX_SECRET: string
      AUTH_DUENDEIDS6_ID: string
      AUTH_DUENDEIDS6_SECRET: string
      AUTH_EVEONLINE_ID: string
      AUTH_EVEONLINE_SECRET: string
      AUTH_FACEBOOK_ID: string
      AUTH_FACEBOOK_SECRET: string
      AUTH_FACEIT_ID: string
      AUTH_FACEIT_SECRET: string
      AUTH_FORTYTWOSCHOOL_ID: string
      AUTH_FORTYTWOSCHOOL_SECRET: string
      AUTH_FOURSQUARE_ID: string
      AUTH_FOURSQUARE_SECRET: string
      AUTH_FRESHBOOKS_ID: string
      AUTH_FRESHBOOKS_SECRET: string
      AUTH_FUSIONAUTH_ID: string
      AUTH_FUSIONAUTH_SECRET: string
      AUTH_GITHUB_ID: string
      AUTH_GITHUB_SECRET: string
      AUTH_GITLAB_ID: string
      AUTH_GITLAB_SECRET: string
      AUTH_GOOGLE_ID: string
      AUTH_GOOGLE_SECRET: string
      AUTH_HUBSPOT_ID: string
      AUTH_HUBSPOT_SECRET: string
      AUTH_INSTAGRAM_ID: string
      AUTH_INSTAGRAM_SECRET: string
      AUTH_KAKAO_ID: string
      AUTH_KAKAO_SECRET: string
      AUTH_KEYCLOAK_ID: string
      AUTH_KEYCLOAK_SECRET: string
      AUTH_LINE_ID: string
      AUTH_LINE_SECRET: string
      AUTH_LINKEDIN_ID: string
      AUTH_LINKEDIN_SECRET: string
      AUTH_MAILCHIMP_ID: string
      AUTH_MAILCHIMP_SECRET: string
      AUTH_MAILRU_ID: string
      AUTH_MAILRU_SECRET: string
      AUTH_MEDIUM_ID: string
      AUTH_MEDIUM_SECRET: string
      AUTH_NAVER_ID: string
      AUTH_NAVER_SECRET: string
      AUTH_NETLIFY_ID: string
      AUTH_NETLIFY_SECRET: string
      AUTH_OKTA_ID: string
      AUTH_OKTA_SECRET: string
      AUTH_ONELOGIN_ID: string
      AUTH_ONELOGIN_SECRET: string
      AUTH_OSSO_ID: string
      AUTH_OSSO_ISSUER: string
      AUTH_OSSO_SECRET: string
      AUTH_OSU_ID: string
      AUTH_OSU_SECRET: string
      AUTH_PASSAGE_ID: string
      AUTH_PASSAGE_ISSUER: string
      AUTH_PASSAGE_SECRET: string
      AUTH_PATREON_ID: string
      AUTH_PATREON_SECRET: string
      AUTH_PINTEREST_ID: string
      AUTH_PINTEREST_SECRET: string
      AUTH_PIPEDRIVE_ID: string
      AUTH_PIPEDRIVE_SECRET: string
      AUTH_REDDIT_ID: string
      AUTH_REDDIT_SECRET: string
      AUTH_SALESFORCE_ID: string
      AUTH_SALESFORCE_SECRET: string
      AUTH_SLACK_ID: string
      AUTH_SLACK_SECRET: string
      AUTH_SPOTIFY_ID: string
      AUTH_SPOTIFY_SECRET: string
      AUTH_STRAVA_ID: string
      AUTH_STRAVA_SECRET: string
      AUTH_TODOIST_ID: string
      AUTH_TODOIST_SECRET: string
      AUTH_TRAKT_ID: string
      AUTH_TRAKT_SECRET: string
      AUTH_TWITCH_ID: string
      AUTH_TWITCH_SECRET: string
      AUTH_TWITTER_ID: string
      AUTH_TWITTER_SECRET: string
      AUTH_UE_ID: string
      AUTH_UE_ISSUER: string
      AUTH_UE_SECRET: string
      AUTH_VK_ID: string
      AUTH_VK_SECRET: string
      AUTH_WIKIMEDIA_ID: string
      AUTH_WIKIMEDIA_SECRET: string
      AUTH_WORDPRESS_ID: string
      AUTH_WORDPRESS_SECRET: string
      AUTH_WORKOS_ID: string
      AUTH_WORKOS_SECRET: string
      AUTH_YANDEX_ID: string
      AUTH_YANDEX_SECRET: string
      AUTH_ZITADEL_ID: string
      AUTH_ZITADEL_SECRET: string
      AUTH_ZOHO_ID: string
      AUTH_ZOHO_SECRET: string
      AUTH_ZOOM_ID: string
      AUTH_ZOOM_SECRET: string
    }
  }
}
