import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { ContractConfirmedAttendee } from "../generated/schema"
import { ContractConfirmedAttendee as ContractConfirmedAttendeeEvent } from "../generated/Contract/Contract"
import { handleContractConfirmedAttendee } from "../src/contract"
import { createContractConfirmedAttendeeEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let eventId = Bytes.fromI32(1234567890)
    let attendeeAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newContractConfirmedAttendeeEvent = createContractConfirmedAttendeeEvent(
      eventId,
      attendeeAddress
    )
    handleContractConfirmedAttendee(newContractConfirmedAttendeeEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ContractConfirmedAttendee created and stored", () => {
    assert.entityCount("ContractConfirmedAttendee", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ContractConfirmedAttendee",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "eventId",
      "1234567890"
    )
    assert.fieldEquals(
      "ContractConfirmedAttendee",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "attendeeAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
