import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ContractConfirmedAttendee,
  ContractDepositsPaidOut,
  ContractNewEventCreated,
  ContractNewRSVP
} from "../generated/Contract/Contract"

export function createContractConfirmedAttendeeEvent(
  eventId: Bytes,
  attendeeAddress: Address
): ContractConfirmedAttendee {
  let contractConfirmedAttendeeEvent = changetype<ContractConfirmedAttendee>(
    newMockEvent()
  )

  contractConfirmedAttendeeEvent.parameters = new Array()

  contractConfirmedAttendeeEvent.parameters.push(
    new ethereum.EventParam("eventId", ethereum.Value.fromFixedBytes(eventId))
  )
  contractConfirmedAttendeeEvent.parameters.push(
    new ethereum.EventParam(
      "attendeeAddress",
      ethereum.Value.fromAddress(attendeeAddress)
    )
  )

  return contractConfirmedAttendeeEvent
}

export function createContractDepositsPaidOutEvent(
  eventId: Bytes
): ContractDepositsPaidOut {
  let contractDepositsPaidOutEvent = changetype<ContractDepositsPaidOut>(
    newMockEvent()
  )

  contractDepositsPaidOutEvent.parameters = new Array()

  contractDepositsPaidOutEvent.parameters.push(
    new ethereum.EventParam("eventId", ethereum.Value.fromFixedBytes(eventId))
  )

  return contractDepositsPaidOutEvent
}

export function createContractNewEventCreatedEvent(
  eventId: Bytes,
  creatorAddress: Address,
  eventTimestamp: BigInt,
  maxCapacity: BigInt,
  deposit: BigInt,
  eventDataCID: string
): ContractNewEventCreated {
  let contractNewEventCreatedEvent = changetype<ContractNewEventCreated>(
    newMockEvent()
  )

  contractNewEventCreatedEvent.parameters = new Array()

  contractNewEventCreatedEvent.parameters.push(
    new ethereum.EventParam("eventId", ethereum.Value.fromFixedBytes(eventId))
  )
  contractNewEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "creatorAddress",
      ethereum.Value.fromAddress(creatorAddress)
    )
  )
  contractNewEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "eventTimestamp",
      ethereum.Value.fromUnsignedBigInt(eventTimestamp)
    )
  )
  contractNewEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "maxCapacity",
      ethereum.Value.fromUnsignedBigInt(maxCapacity)
    )
  )
  contractNewEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "deposit",
      ethereum.Value.fromUnsignedBigInt(deposit)
    )
  )
  contractNewEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "eventDataCID",
      ethereum.Value.fromString(eventDataCID)
    )
  )

  return contractNewEventCreatedEvent
}

export function createContractNewRSVPEvent(
  eventId: Bytes,
  attendeeAddress: Address
): ContractNewRSVP {
  let contractNewRsvpEvent = changetype<ContractNewRSVP>(newMockEvent())

  contractNewRsvpEvent.parameters = new Array()

  contractNewRsvpEvent.parameters.push(
    new ethereum.EventParam("eventId", ethereum.Value.fromFixedBytes(eventId))
  )
  contractNewRsvpEvent.parameters.push(
    new ethereum.EventParam(
      "attendeeAddress",
      ethereum.Value.fromAddress(attendeeAddress)
    )
  )

  return contractNewRsvpEvent
}
