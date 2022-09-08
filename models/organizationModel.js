import mongoose from 'mongoose'

const organizationSchema = new mongoose.Schema(
  {
    organization_name: {
      type: String,
      required: true,
    },
    products: [
      {
        type: String,
        required: true,
      },
    ],
    address: String,
    ceo: String,
    country: {
      type: String,
      default: 'Nigeria',
    },
    balance: {
      type: Number,
      default: 0,
    },
    noOfEmployees: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ['Tech', 'Health', 'Music', 'Organ Harvesting Industry'],
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Organization = mongoose.model('Organization', organizationSchema)
