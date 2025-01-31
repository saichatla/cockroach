// Copyright 2022 The Cockroach Authors.
//
// Use of this software is governed by the Business Source License
// included in the file licenses/BSL.txt.
//
// As of the Change Date specified in that file, in accordance with
// the Business Source License, use of this software will be governed
// by the Apache License, Version 2.0, included in the file
// licenses/APL.txt.

package connectionpb

import "github.com/cockroachdb/errors"

// Type returns the ConnectionType of the receiver.
func (d *ConnectionDetails) Type() ConnectionType {
	switch d.Provider {
	case ConnectionProvider_TypeNodelocal:
		return TypeStorage
	case ConnectionProvider_TypeGSKMS:
		return TypeKMS
	default:
		panic(errors.AssertionFailedf("ConnectionDetails.Type called on a details with an unknown type: %T", d.Provider.String()))
	}
}
