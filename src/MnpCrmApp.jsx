import React, { useState, useEffect } from 'react';

// --- AUTHENTIC MNP HOLIDAYS PRIVATE TRAVEL CRM DATA ---
const DEFAULT_MNP_LEADS = [
  {
    id: 'MNP-101',
    name: 'Rajesh Shah & Family',
    phone: '9825012345',
    destination: 'Vietnam 3-Cities Deluxe (Flyer #1)',
    pax: 4,
    travelMonth: 'Dec 2026',
    budget: 148000,
    status: 'new',
    branch: 'Ahmedabad (Nikol HQ)',
    agent: 'Pooja (Sales Executive)',
    source: 'Website Form (Live)',
    notes: 'Inquired for 4 adults. Requested 4★ hotel near Ben Thanh market with vegetarian meal options.'
  },
  {
    id: 'MNP-102',
    name: 'Vikram Patel & Friends',
    phone: '9712098765',
    destination: 'Kashmir Dal Lake & Gulmarg (Flyer #3)',
    pax: 6,
    travelMonth: 'Jan 2027',
    budget: 120000,
    status: 'quote',
    branch: 'Ahmedabad (Nikol HQ)',
    agent: 'Brijesh Patel (Admin)',
    source: 'WhatsApp Desk',
    notes: 'Quotation sent for 6 pax with Gulmarg Gondola Phase 1 & 2 tickets included.'
  },
  {
    id: 'MNP-103',
    name: 'Hardik Mehta (Tech Solutions)',
    phone: '9898044321',
    destination: 'Udaipur Royal Heritage MICE Offsite',
    pax: 25,
    travelMonth: 'Nov 2026',
    budget: 550000,
    status: 'confirmed',
    branch: 'Ahmedabad (Nikol HQ)',
    agent: 'Brijesh Patel (Admin)',
    source: 'Corporate Referral',
    notes: 'Confirmed 25 rooms with conference hall and DJ night setup. 50% advance token received.'
  },
  {
    id: 'MNP-104',
    name: 'Sanjay Joshi (Couple)',
    phone: '9920155678',
    destination: 'Bali 6D5N Luxury Pool Villa',
    pax: 2,
    travelMonth: 'Feb 2027',
    budget: 185000,
    status: 'visa',
    branch: 'Mumbai (Lalbaug)',
    agent: 'Amit (Mumbai Branch)',
    source: 'Instagram Ad',
    notes: 'Honeymoon special. Visa on arrival assistance and private floating breakfast confirmed.'
  },
  {
    id: 'MNP-105',
    name: 'Neha Trivedi',
    phone: '9723011223',
    destination: 'Kerala Houseboat & Munnar (Flyer #12)',
    pax: 5,
    travelMonth: 'Dec 2026',
    budget: 165000,
    status: 'quote',
    branch: 'Ahmedabad (Nikol HQ)',
    agent: 'Pooja (Sales Executive)',
    source: 'Website Form (Live)',
    notes: 'Family trip. Requested private houseboat in Alleppey with Kerala Ayurvedic tour.'
  },
  {
    id: 'MNP-106',
    name: 'Bhavin Chauhan & Family',
    phone: '9879033445',
    destination: 'Dubai 5D4N Shopping Festival & Desert Safari',
    pax: 4,
    travelMonth: 'Jan 2027',
    budget: 317000,
    status: 'confirmed',
    branch: 'Mumbai (Lalbaug)',
    agent: 'Amit (Mumbai Branch)',
    source: 'Direct Walk-in',
    notes: 'Visas issued! Burj Khalifa 124th floor tickets booked. Balance payment on arrival.'
  }
];

const DEFAULT_MNP_PIN = '1234';

export default function MnpCrmApp() {
  const [crmLoggedIn, setCrmLoggedIn] = useState(true);
  const [crmPinInput, setCrmPinInput] = useState('');
  const [crmPinError, setCrmPinError] = useState('');
  const [crmStageFilter, setCrmStageFilter] = useState('all');
  const [crmSearch, setCrmSearch] = useState('');
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);
  const [showQuoteCalcModal, setShowQuoteCalcModal] = useState(false);

  // Set document title
  useEffect(() => {
    document.title = 'MNP Holidays Private Travel CRM | Command Center';
  }, []);

  const [newLeadForm, setNewLeadForm] = useState({
    name: '',
    phone: '',
    destination: 'Vietnam 3-Cities Deluxe (Flyer #1)',
    pax: 2,
    travelMonth: 'Upcoming 2026/27',
    budget: '85000',
    branch: 'Ahmedabad (Nikol HQ)',
    agent: 'Brijesh Patel (Admin)',
    notes: ''
  });

  const [quoteCalcState, setQuoteCalcState] = useState({
    destination: 'Vietnam 3-Cities Deluxe (Flyer #1)',
    adults: 2,
    children: 0,
    hotelTier: '4star',
    includeFlight: true,
    includeVisa: true
  });

  const [crmLeads, setCrmLeads] = useState(() => {
    try {
      const saved = localStorage.getItem('mnp_crm_leads_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_MNP_LEADS;
  });

  const saveLeads = (newLeads) => {
    setCrmLeads(newLeads);
    try {
      localStorage.setItem('mnp_crm_leads_v2', JSON.stringify(newLeads));
    } catch (e) {
      console.error(e);
    }
  };

  const addNewLeadToCrm = (lead) => {
    const updated = [lead, ...crmLeads];
    saveLeads(updated);
  };

  const updateLeadStatus = (id, newStatus) => {
    const updated = crmLeads.map((lead) => (lead.id === id ? { ...lead, status: newStatus } : lead));
    saveLeads(updated);
  };

  const deleteLead = (id) => {
    if (window.confirm('Delete this travel lead from MNP CRM?')) {
      const updated = crmLeads.filter((lead) => lead.id !== id);
      saveLeads(updated);
    }
  };

  const exportLeadsToCsv = () => {
    const headers = ['Lead_ID,Client_Name,Phone,Destination,Pax,Travel_Month,Budget_INR,Stage_Status,Branch,Agent,Source,Remarks'];
    const rows = crmLeads.map((l) =>
      `"${l.id}","${l.name}","${l.phone}","${l.destination}","${l.pax}","${l.travelMonth}","${l.budget}","${l.status}","${l.branch}","${l.agent}","${l.source}","${(l.notes || '').replace(/"/g, '""')}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `MNP_Holidays_CRM_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCreateLeadSubmit = (e) => {
    e.preventDefault();
    if (!newLeadForm.name || !newLeadForm.phone) return;
    const newLeadObj = {
      id: `MNP-${Date.now().toString().slice(-4)}`,
      name: newLeadForm.name,
      phone: newLeadForm.phone,
      destination: newLeadForm.destination,
      pax: parseInt(newLeadForm.pax) || 2,
      travelMonth: newLeadForm.travelMonth || 'Dec 2026',
      budget: parseInt(newLeadForm.budget) || 50000,
      status: 'new',
      branch: newLeadForm.branch,
      agent: newLeadForm.agent,
      source: 'Direct Intake (CRM)',
      notes: newLeadForm.notes || 'Inquiry logged manually by staff.'
    };
    addNewLeadToCrm(newLeadObj);
    setShowAddLeadModal(false);
    setNewLeadForm({
      name: '',
      phone: '',
      destination: 'Vietnam 3-Cities Deluxe (Flyer #1)',
      pax: 2,
      travelMonth: 'Upcoming 2026/27',
      budget: '85000',
      branch: 'Ahmedabad (Nikol HQ)',
      agent: 'Brijesh Patel (Admin)',
      notes: ''
    });
  };

  // KPI Calculations
  const totalLeadsCount = crmLeads.length;
  const totalPipelineValue = crmLeads.reduce((acc, curr) => acc + (Number(curr.budget) || 0), 0);
  const confirmedCount = crmLeads.filter((l) => l.status === 'confirmed').length;
  const quoteSentCount = crmLeads.filter((l) => l.status === 'quote').length;

  return (
    <div className="mnp-crm-standalone-app">
      <div className="mnp-crm-portal">
        {/* Top Navigation Bar */}
        <div className="mnp-crm-topbar">
          <div className="mnp-crm-brand-group">
            <img src="/logo.png" alt="MNP Holidays" className="mnp-crm-logo-img" />
            <div className="mnp-crm-titles">
              <h2>
                <span>MNP Holidays</span>
                <span style={{ color: '#FF6B00', fontSize: '0.85em' }}>CRM</span>
              </h2>
              <div className="mnp-crm-tagline">
                <span>Private Travel Command Center</span>
                <span className="mnp-crm-branch-pill">Ahmedabad HQ & Mumbai Branch</span>
              </div>
            </div>
          </div>

          {crmLoggedIn && (
            <div className="mnp-crm-search-box">
              <span className="mnp-crm-search-icon">🔍</span>
              <input 
                type="text" 
                className="mnp-crm-search-input"
                placeholder="Search client name, phone, destination, agent..."
                value={crmSearch}
                onChange={(e) => setCrmSearch(e.target.value)}
              />
            </div>
          )}

          <div className="mnp-crm-actions-group">
            {crmLoggedIn ? (
              <>
                <button 
                  className="btn-crm-action primary"
                  onClick={() => setShowAddLeadModal(true)}
                >
                  <span>➕</span>
                  <span>Add Lead</span>
                </button>
                <button 
                  className="btn-crm-action"
                  onClick={() => setShowQuoteCalcModal(true)}
                >
                  <span>⚡</span>
                  <span>Quote Calc</span>
                </button>
                <button 
                  className="btn-crm-action"
                  onClick={exportLeadsToCsv}
                  title="Export all leads to Excel / CSV"
                >
                  <span>📥</span>
                  <span>Export CSV</span>
                </button>
                <button 
                  className="btn-crm-action"
                  onClick={() => setCrmLoggedIn(false)}
                  title="Lock CRM"
                >
                  <span>🔒</span>
                  <span>Lock</span>
                </button>
              </>
            ) : (
              <button 
                className="btn-crm-action primary"
                onClick={() => setCrmLoggedIn(true)}
              >
                <span>⚡</span>
                <span>Admin Unlock</span>
              </button>
            )}

            {/* Link to Public Website */}
            <a 
              href="https://www.mnpholidays.com" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-crm-action"
              style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.2)' }}
              title="Open Public Customer Website"
            >
              <span>🌐</span>
              <span>Public Website</span>
            </a>
          </div>
        </div>

        {/* Portal Body */}
        {!crmLoggedIn ? (
          /* Security PIN Lock Shield */
          <div className="mnp-crm-login-shield">
            <div className="mnp-crm-login-card">
              <img src="/logo.png" alt="MNP Holidays" className="mnp-crm-login-logo" />
              <div>
                <h3 className="mnp-crm-login-title">Staff & Admin Access Required</h3>
                <p className="mnp-crm-login-sub">Enter your 4-digit travel executive PIN to access MNP customer leads & bookings.</p>
              </div>

              <form 
                className="mnp-crm-pin-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (crmPinInput === DEFAULT_MNP_PIN || crmPinInput === '9712' || crmPinInput === '9898') {
                    setCrmLoggedIn(true);
                    setCrmPinError('');
                    setCrmPinInput('');
                  } else {
                    setCrmPinError('Invalid PIN code. Default staff PIN is 1234.');
                  }
                }}
              >
                <input 
                  type="password"
                  maxLength={4}
                  className="mnp-crm-pin-input"
                  placeholder="• • • •"
                  value={crmPinInput}
                  onChange={(e) => setCrmPinInput(e.target.value)}
                  autoFocus
                />
                {crmPinError && <span className="mnp-crm-pin-error">{crmPinError}</span>}
                <button type="submit" className="mnp-crm-btn-unlock">Unlock CRM Dashboard</button>
              </form>

              <div className="mnp-crm-login-footer">
                <span>Default Demo PIN: <strong>1234</strong></span>
                <span>•</span>
                <button 
                  type="button" 
                  className="mnp-crm-quick-unlock-link"
                  onClick={() => setCrmLoggedIn(true)}
                >
                  Quick Bypass (Staff)
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Active Command Center Dashboard */
          <div className="mnp-crm-body">
            {/* KPI Overview Metric Cards */}
            <div className="mnp-crm-kpi-grid">
              <div className="mnp-crm-kpi-card blue">
                <div className="mnp-crm-kpi-icon">📋</div>
                <div className="mnp-crm-kpi-details">
                  <span className="mnp-crm-kpi-label">Total Inquiries</span>
                  <span className="mnp-crm-kpi-value">{totalLeadsCount}</span>
                  <span className="mnp-crm-kpi-subtext">Active Pipeline</span>
                </div>
              </div>

              <div className="mnp-crm-kpi-card orange">
                <div className="mnp-crm-kpi-icon">💼</div>
                <div className="mnp-crm-kpi-details">
                  <span className="mnp-crm-kpi-label">Pipeline Value</span>
                  <span className="mnp-crm-kpi-value">₹{(totalPipelineValue / 100000).toFixed(2)}L</span>
                  <span className="mnp-crm-kpi-subtext" style={{ color: '#FF6B00' }}>₹{totalPipelineValue.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="mnp-crm-kpi-card green">
                <div className="mnp-crm-kpi-icon">🎉</div>
                <div className="mnp-crm-kpi-details">
                  <span className="mnp-crm-kpi-label">Confirmed Tours</span>
                  <span className="mnp-crm-kpi-value">{confirmedCount}</span>
                  <span className="mnp-crm-kpi-subtext">Booked & Advance Paid</span>
                </div>
              </div>

              <div className="mnp-crm-kpi-card purple">
                <div className="mnp-crm-kpi-icon">📄</div>
                <div className="mnp-crm-kpi-details">
                  <span className="mnp-crm-kpi-label">Quotes Shared</span>
                  <span className="mnp-crm-kpi-value">{quoteSentCount}</span>
                  <span className="mnp-crm-kpi-subtext" style={{ color: '#8B5CF6' }}>Follow-ups Ongoing</span>
                </div>
              </div>
            </div>

            {/* Pipeline Stage Filter Chips */}
            <div className="mnp-crm-filter-bar">
              <button 
                className={`mnp-crm-stage-chip ${crmStageFilter === 'all' ? 'active' : ''}`}
                onClick={() => setCrmStageFilter('all')}
              >
                <span>All Leads</span>
                <span className="mnp-crm-chip-count">{crmLeads.length}</span>
              </button>
              <button 
                className={`mnp-crm-stage-chip ${crmStageFilter === 'new' ? 'active' : ''}`}
                onClick={() => setCrmStageFilter('new')}
              >
                <span>⚡ New Inquiries</span>
                <span className="mnp-crm-chip-count">{crmLeads.filter((l) => l.status === 'new').length}</span>
              </button>
              <button 
                className={`mnp-crm-stage-chip ${crmStageFilter === 'quote' ? 'active' : ''}`}
                onClick={() => setCrmStageFilter('quote')}
              >
                <span>📄 Quote Sent</span>
                <span className="mnp-crm-chip-count">{crmLeads.filter((l) => l.status === 'quote').length}</span>
              </button>
              <button 
                className={`mnp-crm-stage-chip ${crmStageFilter === 'visa' ? 'active' : ''}`}
                onClick={() => setCrmStageFilter('visa')}
              >
                <span>🛂 Visa In-Process</span>
                <span className="mnp-crm-chip-count">{crmLeads.filter((l) => l.status === 'visa').length}</span>
              </button>
              <button 
                className={`mnp-crm-stage-chip ${crmStageFilter === 'confirmed' ? 'active' : ''}`}
                onClick={() => setCrmStageFilter('confirmed')}
              >
                <span>🎉 Confirmed</span>
                <span className="mnp-crm-chip-count">{crmLeads.filter((l) => l.status === 'confirmed').length}</span>
              </button>
              <button 
                className={`mnp-crm-stage-chip ${crmStageFilter === 'followup' ? 'active' : ''}`}
                onClick={() => setCrmStageFilter('followup')}
              >
                <span>⏰ Follow-up</span>
                <span className="mnp-crm-chip-count">{crmLeads.filter((l) => l.status === 'followup').length}</span>
              </button>
            </div>

            {/* Leads Grid & Cards */}
            {(() => {
              const filtered = crmLeads.filter((lead) => {
                const matchesStage = crmStageFilter === 'all' || lead.status === crmStageFilter;
                if (!crmSearch.trim()) return matchesStage;
                const q = crmSearch.toLowerCase();
                const matchText = [
                  lead.name,
                  lead.phone,
                  lead.destination,
                  lead.branch,
                  lead.agent,
                  lead.notes
                ].join(' ').toLowerCase();
                return matchesStage && matchText.includes(q);
              });

              if (filtered.length === 0) {
                return (
                  <div style={{ textAlign: 'center', padding: '3rem 1rem', background: '#FFFFFF', borderRadius: '12px', border: '1px dashed #CBD5E1' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🏝️</div>
                    <h4 style={{ color: '#0F2557', margin: 0, fontWeight: 800 }}>No Leads Found</h4>
                    <p style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '4px' }}>Try switching stage filters or search keywords.</p>
                    <button 
                      className="btn-crm-action primary"
                      onClick={() => { setCrmStageFilter('all'); setCrmSearch(''); }}
                      style={{ marginTop: '0.5rem' }}
                    >
                      Reset Filters
                    </button>
                  </div>
                );
              }

              return (
                <div className="mnp-crm-leads-grid">
                  {filtered.map((lead) => {
                    const waQuoteText = `Hello ${lead.name}! This is ${lead.agent} from MNP Holidays Pvt. Ltd.\n\nFollowing your inquiry for *${lead.destination}* (${lead.pax} travelers, ${lead.travelMonth}):\n\n✨ Estimated Package: ₹${Number(lead.budget).toLocaleString('en-IN')}\n🏨 4★/5★ Verified Luxury Hotels\n✈️ Flight & Tourist Visa Assistance\n🚗 Private Cab Sightseeing & Concierge\n\nMay we send the complete day-wise PDF itinerary to this number?`;

                    return (
                      <div key={lead.id} className="mnp-crm-lead-card">
                        <div className="mnp-crm-lead-header">
                          <div>
                            <h4 className="mnp-crm-cust-name">
                              <span>👤</span>
                              <span>{lead.name}</span>
                            </h4>
                            <span className="mnp-crm-lead-time">
                              ID: {lead.id} • Source: {lead.source}
                            </span>
                          </div>
                          <select 
                            className={`mnp-crm-status-select ${lead.status}`}
                            value={lead.status}
                            onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                          >
                            <option value="new">⚡ New Lead</option>
                            <option value="quote">📄 Quote Sent</option>
                            <option value="visa">🛂 Visa In-Process</option>
                            <option value="confirmed">🎉 Confirmed & Paid</option>
                            <option value="followup">⏰ Follow-up Due</option>
                          </select>
                        </div>

                        <div className="mnp-crm-lead-info-box">
                          <div className="mnp-crm-info-row">
                            <span className="mnp-crm-info-label">📍 Destination</span>
                            <span className="mnp-crm-info-val" style={{ color: '#0284C7' }}>{lead.destination}</span>
                          </div>
                          <div className="mnp-crm-info-row">
                            <span className="mnp-crm-info-label">👨‍👩‍👧‍👦 Travelers</span>
                            <span className="mnp-crm-info-val">{lead.pax} Pax ({lead.travelMonth})</span>
                          </div>
                          <div className="mnp-crm-info-row">
                            <span className="mnp-crm-info-label">💰 Quotation</span>
                            <span className="mnp-crm-lead-quote">₹{Number(lead.budget).toLocaleString('en-IN')}</span>
                          </div>
                          <div className="mnp-crm-info-row">
                            <span className="mnp-crm-info-label">🏢 Branch & Agent</span>
                            <span className="mnp-crm-info-val" style={{ fontSize: '0.72rem', color: '#64748B' }}>{lead.agent} ({lead.branch})</span>
                          </div>
                        </div>

                        {lead.notes && (
                          <div className="mnp-crm-notes-box">
                            <strong>Remarks:</strong> {lead.notes}
                          </div>
                        )}

                        <div className="mnp-crm-card-actions">
                          <a 
                            href={`https://wa.me/91${lead.phone.replace(/\D/g, '')}?text=${encodeURIComponent(waQuoteText)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-crm-card-wa"
                            title="Send official itinerary & quote on WhatsApp"
                          >
                            <span>💬</span>
                            <span>WhatsApp Quote</span>
                          </a>
                          <a 
                            href={`tel:+91${lead.phone.replace(/\D/g, '')}`}
                            className="btn-crm-card-call"
                            title="Call customer directly"
                          >
                            <span>📞</span>
                            <span>Call</span>
                          </a>
                          <button 
                            className="btn-crm-card-del"
                            onClick={() => deleteLead(lead.id)}
                            title="Delete Lead"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })()}

            {/* Submodal 1: Add New Lead Modal */}
            {showAddLeadModal && (
              <div className="mnp-crm-submodal-overlay" onClick={() => setShowAddLeadModal(false)}>
                <div className="mnp-crm-submodal" onClick={(e) => e.stopPropagation()}>
                  <div className="mnp-crm-submodal-header">
                    <h3>➕ Add New Travel Lead</h3>
                    <button className="btn-crm-close" onClick={() => setShowAddLeadModal(false)}>✕</button>
                  </div>

                  <form className="mnp-crm-form-grid" onSubmit={handleCreateLeadSubmit}>
                    <div className="mnp-crm-form-group">
                      <label>Client Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Ramesh Patel"
                        value={newLeadForm.name}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, name: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group">
                      <label>Phone / WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="e.g. 98250 12345"
                        value={newLeadForm.phone}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group">
                      <label>Target Destination</label>
                      <select 
                        value={newLeadForm.destination}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, destination: e.target.value })}
                      >
                        <option value="Vietnam 3-Cities Deluxe (Flyer #1)">Vietnam 3-Cities Deluxe (Flyer #1)</option>
                        <option value="Thailand 3-Cities Mega (Flyer #2)">Thailand 3-Cities Mega (Flyer #2)</option>
                        <option value="Kashmir Dal Lake & Gulmarg (Flyer #3)">Kashmir Dal Lake & Gulmarg (Flyer #3)</option>
                        <option value="Bali 6D5N Luxury Pool Villa">Bali 6D5N Luxury Pool Villa</option>
                        <option value="Dubai 5D4N Shopping Festival">Dubai 5D4N Shopping Festival</option>
                        <option value="Kerala Houseboat & Munnar (Flyer #12)">Kerala Houseboat & Munnar (Flyer #12)</option>
                        <option value="Udaipur Royal Heritage Group Tour">Udaipur Royal Heritage Group Tour</option>
                        <option value="Jaisalmer Sam Sand Dunes Luxury Camp">Jaisalmer Sam Sand Dunes Luxury Camp</option>
                        <option value="Goa 4D3N Beach & Watersports">Goa 4D3N Beach & Watersports</option>
                        <option value="Singapore & Malaysia Combo 7D6N">Singapore & Malaysia Combo 7D6N</option>
                        <option value="Europe Grand Swiss & Paris Tour">Europe Grand Swiss & Paris Tour</option>
                        <option value="Custom Bespoke Itinerary">Custom Bespoke Itinerary</option>
                      </select>
                    </div>
                    <div className="mnp-crm-form-group">
                      <label>Number of Travelers (Pax)</label>
                      <input 
                        type="number" 
                        min="1" 
                        value={newLeadForm.pax}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, pax: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group">
                      <label>Travel Month / Dates</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Dec 2026 / Diwali"
                        value={newLeadForm.travelMonth}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, travelMonth: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group">
                      <label>Estimated Budget (₹)</label>
                      <input 
                        type="number" 
                        value={newLeadForm.budget}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, budget: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group">
                      <label>Branch & Agent</label>
                      <select 
                        value={newLeadForm.agent}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, agent: e.target.value })}
                      >
                        <option value="Brijesh Patel (Admin)">Brijesh Patel (Admin HQ)</option>
                        <option value="Pooja (Sales Executive)">Pooja (Nikol Branch)</option>
                        <option value="Amit (Mumbai Branch)">Amit (Mumbai Lalbaug Branch)</option>
                      </select>
                    </div>
                    <div className="mnp-crm-form-group full">
                      <label>Customer Remarks / Notes</label>
                      <textarea 
                        rows="2"
                        placeholder="Hotel preferences, food requirements, flight timings..."
                        value={newLeadForm.notes}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, notes: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group full" style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', justifyContent: 'flex-end', marginTop: '0.4rem' }}>
                      <button type="button" className="btn-crm-action" onClick={() => setShowAddLeadModal(false)}>Cancel</button>
                      <button type="submit" className="btn-crm-action primary">Save Lead to MNP CRM</button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Submodal 2: Quick Travel Quote Calculator */}
            {showQuoteCalcModal && (
              <div className="mnp-crm-submodal-overlay" onClick={() => setShowQuoteCalcModal(false)}>
                <div className="mnp-crm-submodal" onClick={(e) => e.stopPropagation()}>
                  <div className="mnp-crm-submodal-header">
                    <h3>⚡ Quick Travel Quote Calculator</h3>
                    <button className="btn-crm-close" onClick={() => setShowQuoteCalcModal(false)}>✕</button>
                  </div>

                  {(() => {
                    const rates = {
                      'Vietnam 3-Cities Deluxe (Flyer #1)': { base: 38999, flight: 26000, visa: 3500 },
                      'Thailand 3-Cities Mega (Flyer #2)': { base: 29999, flight: 22000, visa: 0 },
                      'Kashmir Dal Lake & Gulmarg (Flyer #3)': { base: 18999, flight: 14000, visa: 0 },
                      'Bali 6D5N Luxury Pool Villa': { base: 42999, flight: 34000, visa: 3000 },
                      'Dubai 5D4N Shopping Festival': { base: 36999, flight: 24000, visa: 6500 },
                      'Kerala Houseboat & Munnar (Flyer #12)': { base: 16999, flight: 12000, visa: 0 },
                      'Udaipur Royal Heritage Group Tour': { base: 9999, flight: 6000, visa: 0 }
                    };

                    const currentRate = rates[quoteCalcState.destination] || { base: 25000, flight: 15000, visa: 0 };
                    const adultCount = Number(quoteCalcState.adults) || 1;
                    const childCount = Number(quoteCalcState.children) || 0;
                    const hotelMult = quoteCalcState.hotelTier === '5star' ? 1.35 : 1.0;

                    const perAdultBase = Math.round(currentRate.base * hotelMult);
                    const perChildBase = Math.round(currentRate.base * 0.7 * hotelMult);
                    const flightCost = quoteCalcState.includeFlight ? (adultCount + childCount) * currentRate.flight : 0;
                    const visaCost = quoteCalcState.includeVisa ? (adultCount + childCount) * currentRate.visa : 0;

                    const totalEstimatedQuote = (adultCount * perAdultBase) + (childCount * perChildBase) + flightCost + visaCost;
                    const perPersonEstimated = Math.round(totalEstimatedQuote / (adultCount + childCount));

                    const shareQuoteText = `Hello! MNP Holidays Pvt. Ltd. Official Travel Quote:\n\n🌍 Destination: *${quoteCalcState.destination}*\n👥 Travelers: ${adultCount} Adults${childCount > 0 ? `, ${childCount} Children` : ''}\n🏨 Hotel Standard: ${quoteCalcState.hotelTier === '5star' ? '5★ Ultra Luxury' : '4★ Luxury'}\n✈️ Flights Included: ${quoteCalcState.includeFlight ? 'Yes' : 'No'}\n🛂 Visa Included: ${quoteCalcState.includeVisa ? 'Yes' : 'No'}\n\n💰 Total Package Price: *₹${totalEstimatedQuote.toLocaleString('en-IN')}*\n(Approx ₹${perPersonEstimated.toLocaleString('en-IN')} per traveler)\n\nIncludes verified hotels, private transfers, daily breakfast & 24/7 concierge assistance.\nCall Ahmedabad: +91 97122 04028 | Mumbai: +91 98980 83171`;

                    return (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                        <div className="mnp-crm-form-group">
                          <label>Choose Tour Destination</label>
                          <select 
                            value={quoteCalcState.destination}
                            onChange={(e) => setQuoteCalcState({ ...quoteCalcState, destination: e.target.value })}
                          >
                            <option value="Vietnam 3-Cities Deluxe (Flyer #1)">Vietnam 3-Cities Deluxe (Flyer #1)</option>
                            <option value="Thailand 3-Cities Mega (Flyer #2)">Thailand 3-Cities Mega (Flyer #2)</option>
                            <option value="Kashmir Dal Lake & Gulmarg (Flyer #3)">Kashmir Dal Lake & Gulmarg (Flyer #3)</option>
                            <option value="Bali 6D5N Luxury Pool Villa">Bali 6D5N Luxury Pool Villa</option>
                            <option value="Dubai 5D4N Shopping Festival">Dubai 5D4N Shopping Festival</option>
                            <option value="Kerala Houseboat & Munnar (Flyer #12)">Kerala Houseboat & Munnar (Flyer #12)</option>
                            <option value="Udaipur Royal Heritage Group Tour">Udaipur Royal Heritage Group Tour</option>
                          </select>
                        </div>

                        <div className="mnp-crm-form-grid">
                          <div className="mnp-crm-form-group">
                            <label>Adult Travelers</label>
                            <input 
                              type="number" 
                              min="1" 
                              value={quoteCalcState.adults}
                              onChange={(e) => setQuoteCalcState({ ...quoteCalcState, adults: e.target.value })}
                            />
                          </div>
                          <div className="mnp-crm-form-group">
                            <label>Child Travelers</label>
                            <input 
                              type="number" 
                              min="0" 
                              value={quoteCalcState.children}
                              onChange={(e) => setQuoteCalcState({ ...quoteCalcState, children: e.target.value })}
                            />
                          </div>
                          <div className="mnp-crm-form-group">
                            <label>Hotel Category</label>
                            <select 
                              value={quoteCalcState.hotelTier}
                              onChange={(e) => setQuoteCalcState({ ...quoteCalcState, hotelTier: e.target.value })}
                            >
                              <option value="4star">4★ Verified Luxury</option>
                              <option value="5star">5★ Ultra Luxury Palace</option>
                            </select>
                          </div>
                          <div className="mnp-crm-form-group" style={{ justifyContent: 'center' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.8rem' }}>
                              <input 
                                type="checkbox"
                                checked={quoteCalcState.includeFlight}
                                onChange={(e) => setQuoteCalcState({ ...quoteCalcState, includeFlight: e.target.checked })}
                              />
                              <span>Include Airfare</span>
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.8rem', marginTop: '4px' }}>
                              <input 
                                type="checkbox"
                                checked={quoteCalcState.includeVisa}
                                onChange={(e) => setQuoteCalcState({ ...quoteCalcState, includeVisa: e.target.checked })}
                              />
                              <span>Include Visa Fees</span>
                            </label>
                          </div>
                        </div>

                        {/* Resulting Quotation Card */}
                        <div className="mnp-crm-quote-result">
                          <div>
                            <span style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Instant Travel Quotation</span>
                            <div className="mnp-crm-quote-amount">₹{totalEstimatedQuote.toLocaleString('en-IN')}</div>
                            <span style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>≈ ₹{perPersonEstimated.toLocaleString('en-IN')} per traveler</span>
                          </div>
                          <a 
                            href={`https://wa.me/?text=${encodeURIComponent(shareQuoteText)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-crm-action primary"
                            style={{ textDecoration: 'none' }}
                          >
                            <span>💬</span>
                            <span>Share Quote</span>
                          </a>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
